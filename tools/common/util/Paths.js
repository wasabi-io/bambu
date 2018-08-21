const path = require("path");
const appRoot = require("app-root-path");

function get(relativePath) {
    return path.resolve(appRoot.path, relativePath);
}

module.exports = {
    get
};
