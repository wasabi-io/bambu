const path = require("path");
const Files = require("./common/util/Files");
const Paths = require("./common/util/Paths");

const targetPath = Paths.get("lib/");
const sourcePath = Paths.get("src/");

const list = Files.walkSync(sourcePath, [], ["json", "css"], ["ds_store"]);

list.forEach((file) => {
    const  sourceFile = file;
    const  targetFile = path.join(targetPath, file.substring(sourcePath.length));
    const content = Files.readFileSync(sourceFile);
    Files.writeFileSync(targetFile, content);
    console.log(`${sourceFile} moved to ${targetFile}`)
});
