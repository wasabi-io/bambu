const Finder = require("../util/PathFinder");
const Arrays = require("../util/Arrays");

const configurer = function(config) {
    const finder = new Finder(config.basePath);
    const resolve = {
        modules: [
            config.paths.app,
            config.paths.node_modules
        ],
        enforceModuleExtension: !!(config.enforceModuleExtension) ,
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".json"]
    };

    if(config.paths.lib) {
        resolve.modules.push(config.paths.lib);
    }

    console.log(config.aliases);
    if(config.aliases) {
        resolve.alias = finder.getAll(config.aliases);
        console.log(resolve.alias)
    }
    Arrays.addAllAsUniqueToArray(config.modules, resolve.modules);
    Arrays.addAllAsUniqueToArray(config.extensions, resolve.extensions);
    return resolve;
};

module.exports = configurer;
