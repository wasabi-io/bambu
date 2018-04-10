const path = require('path');
const fs = require('fs');

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

module.exports = {
    list: list
};

