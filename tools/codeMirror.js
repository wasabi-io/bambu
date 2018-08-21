const path = require("path");
const Files = require("./common/util/Files");

const themeFileList = [];

Files.walkSync(path.resolve("../node_modules/codemirror/theme"), themeFileList, ["css"], []);

const theme = themeFileList.map((file) => {
    const paths = file.split("/");
    const last = paths.pop();
    return last.substring(0, last.length - 4);
});

Files.writeFileSync(path.resolve("../showcase/component/editor/mirror/theme/theme.json"), JSON.stringify(theme, null, 2));


const modeFileList = [];

Files.walkSync(path.resolve("../node_modules/codemirror/mode"), modeFileList, ["js"], []);

const mode = modeFileList.map((file) => {
    const paths = file.split("\/");
    paths.pop();
    return paths.pop();
});


Files.writeFileSync(path.resolve("../showcase/component/editor/mirror/mode/mode.json"), JSON.stringify(mode, null, 2));
