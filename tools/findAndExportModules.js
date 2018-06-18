const fs = require("fs");
const path = require("path");
const Files = require("./common/util/Files");
const fileExtension = require('file-extension');
// List all files in a directory in Node.js recursively in a synchronous fashion

const startPath = path.resolve(__dirname, "../src");

const list = Files.walkSync(startPath, [], ["ts", "tsx"], ["ds_store"]);
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
    `import * as ClassNames from "classnames";`,
    `import * as PropTypes from "prop-types";`,
    `import * as React from "react";`,
    `import * as ReactDOM from "react-dom";`,
    `import * as bambu from "bambu";`,
    `import * as mobxReact from "mobx-react";`,
    `import * as mobx from "mobx";`,
    `import * as wasabiCommon from "wasabi-common";`
];
const jsonList = [
    `    "classnames": ClassNames`,
    `    "prop-types": PropTypes`,
    `    "react": React`,
    `    "react-dom": ReactDOM`,
    `    "bambu": bambu`,
    `    "mobx": mobx`,
    `    "mobx-react": mobxReact`,
    `    "wasabi-common": wasabiCommon`
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
