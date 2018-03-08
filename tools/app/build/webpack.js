process.env.NODE_ENV = process.env.NODE_ENV || "production";
const webpack = require("webpack");
const WebpackNotifierPlugin = require("webpack-notifier");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const packageJson = require("../../../package.json");
const { merge } = require("../../common/util/Objects");
const configureWebpack = require("../../common/webpack/webpack");

let jsonConfig = require("../options");

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
}, jsonConfig);

const settings = new configureWebpack(jsonConfig);

settings.webpack.output = {
    path: settings.paths.www,
    filename: "[name].[hash].js"
};

if(process.NODE_ENV === "development") {
    settings.webpack.devtool = "source-map";
}

settings
    .webpack
    .plugins
    .push(new WebpackNotifierPlugin({ alwaysNotify: false }));
settings
    .webpack
    .plugins
    .push(new webpack.HotModuleReplacementPlugin());
settings
    .webpack
    .plugins
    .push(new HtmlWebpackPlugin(jsonConfig.template(settings)));

if (jsonConfig.copy && jsonConfig.copy.move) {
    settings
        .webpack
        .plugins
        .push(new CopyWebpackPlugin(jsonConfig.copy.move))
}

settings.baseHref = '/rebul/';

module.exports = settings.webpack;
