process.env.NODE_ENV = process.env.NODE_ENV || "production";
const path = require('path');
const WebpackNotifierPlugin = require("webpack-notifier");
const {merge} = require("../../common/util/Objects");
const configureWebpack = require("../../common/webpack/webpack");

const Files = require("../../common/util/Files");

function getEntries() {
    const rootPath = path.resolve(__dirname, '../../../src');
    const entries = {};
    Files
        .list(rootPath, /\.tsx?$/i)
        .forEach((file) => {
            if (!file.endsWith('.d.ts')) {
                entries[file.replace('.tsx', '').replace('.ts', '').replace(rootPath + '/', '')] = file;
            }
        });

    return entries;
}


jsonConfig = merge({
    server: true,
    loader: {
        ts: true,
        css: true,
        sass: true,
        scss: true,
        url: true,
        file: true,
        html: true
    }
}, {
    paths: {
        app: "src",
        node_modules: "node_modules"
    }
});

const settings = new configureWebpack(jsonConfig);
settings.webpack.entry = getEntries();
settings.webpack.output = {
    path: path.resolve(__dirname, '../../../lib'),
    filename: "[name].js"
};

settings
    .webpack
    .plugins
    .push(new WebpackNotifierPlugin({alwaysNotify: false}));

console.log(settings.webpack);
module.exports = settings.webpack;
