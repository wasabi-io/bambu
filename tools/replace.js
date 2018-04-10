const Files = require("./common/util/Files");
const path = require('path');
const fs = require('fs');

// let options = parse(process.argv);

let options = {
    root: path.resolve("./lib"),
    pattern: /.js$/i,
    from: /(require\(['"].*\.)(scss)(['"]\))/i,
    to: '$1css$3'
};

let files = Files.list(options.root, options.pattern);

files.forEach(function (file) {
    let isChanged = false;

    let lines = [];

    fs.readFileSync(file).toString().split('\n').forEach(function (line) {
        if (options.from.test(line)) {
            line = line.replace(options.from, options.to);
            isChanged = true;
        }
        lines.push(line);
    });

    if (isChanged) {
        let content = lines.join('\n');
        fs.writeFileSync(file, content, 'UTF-8');
    }

});


