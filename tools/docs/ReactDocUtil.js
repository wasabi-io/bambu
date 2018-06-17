const path = require('path');
const fileExtension = require('file-extension');
const Files = require("../common/util/Files");
const rootPath = path.resolve(__dirname, "../../");
const sourcePath = path.join(rootPath, "src");
const reactDocgenTypescript = require('react-docgen-typescript');
const docGen = reactDocgenTypescript.withCustomConfig(path.join(rootPath, 'tsconfig.json'), {});
const targetPath = path.join(rootPath, "showcase/modules/react-docs/");
const targetFilePath = path.join(targetPath, "files.json");

const fixAndConvertPropToArray = (component) => {
    component.displayName = component.displayName || "";
    component.description = component.description || "";
    const items = [];
    for (const key in component.props) {
        const prop = component.props[key] || {};
        prop.name = prop.name || "";
        prop.required = prop.required || false;
        prop.type = prop.type || {};
        prop.type.name = prop.type.name || "";
        prop.type.value = prop.type.value || null;
        prop.description = prop.description || "";
        prop.defaultValue = prop.defaultValue || null;
        items.push(prop)
    }
    component.props = items;
    return component;
};

function reactDocUtil(file) {
    const components = docGen.parse(file);
    const items = [];
    const metas = [];
    for (let i = 0; i < components.length; i = i + 1) {
        const component = components[i];
        if (component) {
            items.push(fixAndConvertPropToArray(component))
        }
        metas.push({
            displayName: component.displayName,
            description: component.description
        });
    }

    return { items, metas }
}

function getRelativePath(sourceFile, sourcePath) {
    const ext = fileExtension(sourceFile);
    let componentsRelativePath = sourceFile.replace(sourcePath, "");
    let componentsFileName = componentsRelativePath.substring(0, componentsRelativePath.length - (ext.length + 1));
    if (componentsFileName.startsWith("/")) {
        componentsFileName = componentsFileName.substring(1);
    }
    return componentsFileName;
}

function writeComponentJson(sourceFile, sourcePath, targetPath, items, isReplaced) {
    const componentsFileName = getRelativePath(sourceFile, sourcePath);
    const targetFilePath = `${targetPath}${componentsFileName}.json`;
    const message = Files.existSync(targetFilePath) ? "Changed" : "Added";
    Files.writeFileSync(targetFilePath, JSON.stringify(items, null, 2));
    console.log(`${message} ${targetFilePath}`);
    return componentsFileName;
}

function removeComponentJson(sourceFile, sourcePath, targetPath, componentTree) {
    const componentsFileName = getRelativePath(sourceFile, sourcePath);
    const targetFilePath = `${targetPath}${componentsFileName}.json`;
    Files.removeFileSync(targetFilePath);
    let componentTargets = componentsFileName.split("/");

    let lastTree = componentTree;
    for (let i = 0; i < componentTargets.length; i++) {
        const componentTarget = componentTargets[i];
        if(lastTree[componentTarget]) {
            if (i === (componentTargets.length - 1)) {
                delete lastTree[componentTarget];
            } else {
                lastTree = lastTree[componentTarget];
            }
        }
    }
    return componentsFileName;
}

function readComponentTree() {
    try {
        return JSON.parse(Files.readFileSync(targetFilePath))
    } catch (e) {
        if(e.code === "ENOENT") {
            return {}
        }
        throw e;
    }
}
function writeComponentTree(componentTree) {
    Files.writeFileSync(targetFilePath, JSON.stringify(componentTree, null, 2));
}

function generateComponent(file, fileTree) {

    const parsedResult = reactDocUtil(file);

    const componentsFileName = writeComponentJson(file, sourcePath, targetPath, parsedResult.items);

    let componentTargets = componentsFileName.split("/");

    let lastTree = fileTree;
    for (let i = 0; i < componentTargets.length; i++) {
        const componentTarget = componentTargets[i];
        if (!lastTree[componentTarget]) {
            lastTree[componentTarget] = (i === (componentTargets.length - 1)) ? parsedResult.metas : {};
        } else if(i === (componentTargets.length - 1)) {
            lastTree[componentTarget] = parsedResult.metas;
        }
        lastTree = lastTree[componentTarget];
    }
    return fileTree;
}

function generateAll() {
    let componentTree = readComponentTree() || {};
    const list = Files.walkSync(sourcePath, [], ["tsx"], ["ds_store"]);
    list.forEach((file) => {
        componentTree = generateComponent(file, componentTree)
    });
    writeComponentTree(componentTree);
}

function generateOne(file) {
    let componentTree = readComponentTree() || {};
    componentTree = generateComponent(file, componentTree);
    writeComponentTree(componentTree);
}

function onComponentRemoved(file) {
    let componentTree = readComponentTree() || {};
    removeComponentJson(file, sourcePath, targetPath, componentTree)
    writeComponentTree(componentTree);
}

function getTargetPath(file) {
    const componentsFileName = getRelativePath(file, sourcePath);
    return`${targetPath}${componentsFileName}.json`;
}

module.exports = {
    generateOne,
    generateAll,
    getTargetPath,
    onComponentRemoved
};



