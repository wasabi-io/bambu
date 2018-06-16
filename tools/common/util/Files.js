const path = require('path');
const fs = require('fs');
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

function list(root, pattern, files) {
    files = files || [];

    fs.readdirSync(root).forEach(file => {
        file = path.join(root, file);
        if (fs.existsSync(file)) {
            let stat = fs.statSync(file);
            if (stat.isDirectory()) {
                list(file, pattern, files);
            } else {
                if (!pattern || pattern.test(file)) {
                    files.push(file);
                }
            }
        }
    });
    return files;
}

function writeFileSync(filePath, content, encoding) {
    const paths = filePath.split("/");
    let lastPath = "/";
    for(let i = 1; i < paths.length - 1; i++) {
        try {
            lastPath = lastPath + "/" + paths[i];
            if (!fs.existsSync(lastPath)) {
                fs.mkdirSync(lastPath);
            }
        }catch (e) {
            console.log(e);
        }
    }
    return fs.writeFileSync(filePath, content, encoding);
}

module.exports = {
    walkSync: walkSync,
    list: list,
    writeFileSync
};

