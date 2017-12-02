const Objects = require("../util/Objects");

const configuration = {
    historyApiFallback: true,
    hot: true,
    inline: true,

    // display only errors to reduce the amount of output
    // stats: "errors-only",

    // parse host and port from env so this is easy
    // to customize
    // host: process.env.HOST,
    host: "0.0.0.0",
    port: process.env.PORT || 8080
};

const configurer = function(config) {
    return Objects.merge(config, configuration);
};

module.exports = configurer;
