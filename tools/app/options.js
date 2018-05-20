const packageJson = require("../../package.json");

module.exports = {
    template: function (settings) {
        return {
            title: '',
            version: packageJson.version,
            lastModified: new Date().toString(),
            appMountId: settings.options.mountId,
            template: settings.paths.index_template,
            inject: true
        }
    },
    entries: {
        "app": [
            "./index"
        ]
    },
    paths: {
        app: "showcase",
        www: "docs",
        assets: "assets",
        node_modules: "node_modules",
        index_template: "tools/template/index.template.ejs"
    },
    aliases: {
        "bambu$": "./src/index",
        "bambu/lib": "./src",
        "bulma": "./node_modules/bulma",
        "modules": "./showcase/app/modules/"
    },
    copy: {
        move: [
            {
                from: "../node_modules/bulma/css",
                to: "./vendor/bulma/css/"
            },
            {
                from: "../node_modules/font-awesome",
                to: "./vendor/font-awesome/"
            },
            {
                from: "../assets",
                to: "./assets"
            }
        ]
    }
};

