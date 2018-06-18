const path = require('path');
const reactDocs = require("./docs/ReactDocUtil");
const Files = require("./common/util/Files");

const chokidar = require('chokidar');

const watcher = chokidar.watch(path.resolve(__dirname, "../src/**/*.tsx"), {ignored: /^\./, persistent: true});

watcher
    .on('add', function(path) {
        const targetPath = reactDocs.getTargetPath(path);
        if(!Files.existSync(targetPath)) {
            reactDocs.generateOne(path);
        }
    })
    .on('change', reactDocs.generateOne)
    .on('unlink', reactDocs.onComponentRemoved)
    .on('error', function(error) {console.error('Error happened', error);});