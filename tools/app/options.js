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
        "bambu-form$": "./extensions/form/src/index",
        "bambu-form/lib": "./extensions/form/src",
        "bambu-form/showcase": "./extensions/form/showcase",
        "bambu-grid$": "./extensions/grid/src/index",
        "bambu-grid/lib": "./extensions/grid/src",
        "bambu-grid/showcase": "./extensions/grid/showcase",
        "bulma": "./node_modules/bulma",
        "*": "./showcase",
    },
    copy: {
        move: [
            {
                from: "../node_modules/bulma/css",
                to: "./vendor/bulma/css/"
            },
            {
                from: "../assets",
                to: "./assets"
            }
        ]
    }
};

