const fs = require("fs");
const path = require("path");
const fileExtension = require('file-extension');
// List all files in a directory in Node.js recursively in a synchronous fashion
const walkSync = function (dir, filelist, extensions, ignore) {
    const files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function (file) {
        const ext = fileExtension(file);
        if (ignore.indexOf(ext) === -1) {
            if (fs.statSync(path.resolve(dir, file)).isDirectory()) {
                filelist = walkSync(path.resolve(dir, file) + '/', filelist, extensions, ignore);
            }
            else {
                if (extensions.indexOf(ext) !== -1) {
                    filelist.push(dir + file);
                }
            }
        }
    });
    return filelist;
};

const startPath = path.resolve(__dirname, "../src");

const list = walkSync(startPath, [], ["ts", "tsx"], ["ds_store"]);
const importList = [];
list.forEach((file, index) => {
    const ext = fileExtension(file);
    const importPath = file.substring(startPath.length, file.length - ext.length -1)
    importList.push(importPath);

    if(importPath.endsWith("index")) {
        if(importPath !== "index") {
            const indexPath = importPath.substring(0, importPath.length - "index".length);
            importList.push(indexPath);
            importList.push(indexPath.substring(0, indexPath.length - 1))
        }
    }
});

function toJson(jsonList) {
    return `const modules = {\n${jsonList.join(",\n")}\n};\n`
}

function toModule(moduleList) {
    return `${moduleList.join("\n")}`;
}

const moduleList = [
    `import * as React from "react";`,
    `import * as ReactDOM from "react-dom";`,
    `import * as bambu from "bambu";`,
    `import * as wasabiUi from "wasabi-ui";`
];
const jsonList = [
    `    "react": React`,
    `    "react-dom": ReactDOM`,
    `    "bambu": bambu`,
    `    "wasabi-ui": wasabiUi`
];

importList.forEach((importPath) => {
    const variableName = importPath.split("/").join("_");
    const imPath = path.join("bambu/lib", importPath);
    moduleList.push(`import * as ${variableName} from "${imPath}";`);
    jsonList.push(`    "${imPath}": ${variableName}`);
});

const parts = [
    toModule(moduleList),
    `/* tslint:disable:object-literal-key-quotes */`,
    toJson(jsonList),
    `module.exports = modules;\n`
];
fs.writeFileSync(path.resolve(__dirname, "../showcase/modules.ts"), parts.join("\n"));
