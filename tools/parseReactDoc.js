const path = require("path");
const reactDocgenTypescript = require('react-docgen-typescript');
const Files = require("./common/util/Files");
const fileExtension = require('file-extension');
const fs = require('fs');

const startPath = path.resolve(__dirname, "../src");

const list = Files.walkSync(startPath, [], ["tsx"], ["ds_store"]);

const docGen = reactDocgenTypescript.withCustomConfig(path.join(__dirname, '../tsconfig.json'), {});

const fileTree = {};
const targetPath = path.join(__dirname, "../showcase/modules/react-docs/");

const fixAndConvertPropToArray = (component) => {
    component.displayName = component.displayName || "";
    component.description = component.description || "";
    const items = [];
    for(const key in component.props) {
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


list.forEach((file) => {
    try {
        const components = docGen.parse(file);

        const ext = fileExtension(file);
        let targetFile = file.replace(startPath, "");
        let targetFileName = targetFile.substring(0, targetFile.length - (ext.length + 1));
        if(targetFileName.startsWith("/")) {
            targetFileName = targetFileName.substring(1);
        }

        let targets = targetFileName.split("/");
        let lastTree = fileTree;
        for(let i = 0 ; i < targets.length; i++) {
            const target = targets[i];
            if(!lastTree[target]) {
                lastTree[target] = (i === (targets.length - 1 )) ? components.length : {};
            }
            lastTree = lastTree[target];
        }
        const items = [];
        for(let i = 0; i < components.length; i = i + 1) {
            const component = components[i];
            if(component) {
                items.push(fixAndConvertPropToArray(component))
            }
        }
        if(items.length > 0) {
            console.log(`${targetPath}${targetFileName}.json`);
            Files.writeFileSync(`${targetPath}${targetFileName}.json`, JSON.stringify(items, null, 2));
        }
    } catch (e) {
        console.error(e);
    }
});

Files.writeFileSync(`${targetPath}files.json`, JSON.stringify(fileTree, null, 2));
