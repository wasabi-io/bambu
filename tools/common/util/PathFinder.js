const path = require("path");
const appRoot = require("app-root-path");

const PathFinder = function PathFinder(basePath) {
    const me = this;
    me.projectDir = appRoot.path + (basePath || "");
    this.get = function (absolutePath) {
        const realPath = path.resolve(me.projectDir, absolutePath);
        return path.normalize(realPath);
    };
    me.getAll = function (absoluePathEntries) {
        var pathEntries = {};
        for (var key in absoluePathEntries) {
            if (Object.prototype.hasOwnProperty.call(absoluePathEntries, key)) {
                pathEntries[key] = me.get(absoluePathEntries[key]);
            }
        }
        return pathEntries;
    };
}

module.exports = PathFinder;