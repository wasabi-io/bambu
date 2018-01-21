const path = require("path");
const webpack = require("webpack");
const Finder = require("../util/PathFinder");
const Arrays = require("../util/Arrays");
const Objects = require("../util/Objects");

const nodeEnv = process.env.NODE_ENV || "production";

function configure(config) {


    var options = config.options || {};
    if (process.env.options) {
        options = Objects.merge(JSON.parse(process.env.options), options);
    }
    var settings = {
        options: options,
        webpack: {
            module: {
                rules: []
            },
            plugins: [new webpack.DefinePlugin({
                "process.env": {
                    "NODE_ENV": JSON.stringify(nodeEnv),
                    "options": JSON.stringify(options)
                }
            }), new webpack.WatchIgnorePlugin([
                /sass\.d\.ts$/
            ])],
            node: {
                fs: "empty"
            }
        }
    };
    const finder = new Finder(config.basePath);
    const paths = finder.getAll(config.paths);

    settings.webpack.resolve = require("./resolve")({
        basePath: config.basePath,
        paths: paths,
        aliases: config.aliases,
        modules: config.modules,
        extensions: config.extensions
    });

    if (config.loader) {
        require("./modules")(config.loader, settings.webpack.module.rules);
    }
    Arrays.addAllAsUniqueToArray(config.rules, settings.webpack.module.rules);

    settings.webpack.entry = config.entries;
    settings.webpack.devtool = "source-map";
    settings.webpack.context = paths.app;
    if (config.server) {
        settings.webpack.devServer = require("./devserver")(config.server);
    }
    settings.paths = paths;
    if (config.webpack) {
        settings.webpack = Objects.merge(config.webpack, settings.webpack);
    }
    if (nodeEnv === "production") {
        settings
            .webpack
            .plugins
            .push(new webpack.optimize.OccurrenceOrderPlugin());
    }
    return settings;
}

module.exports = configure;
