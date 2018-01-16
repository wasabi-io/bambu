const packageJson = require("../../package.json");

module.exports = {
    template: function (settings) {
        return {
            title: '',
            version: packageJson.version,
            lastModified: new Date().toString(),
            appMountId: settings.options.mountId,
            links: [
                "./vendor/bulma/css/bulma.css",
                "./vendor/font-awesome/css/font-awesome.css"
            ],
            template: settings.paths.index_template,
            inject: true
        }
    },
    entries: {
        "app": [
            "./index"
        ],
        "vendors": [
            "react",
            "prop-types",
            "react-dom"
        ]
    },
    paths: {
        app: "showcase",
        www: "build",
        assets: "assets",
        node_modules: "node_modules",
        index_template: "tools/template/index.template.ejs"
    },
    aliases: {
        "rebul$": "./src/index",
        "rebul/lib": "./src",
        "bulma": "./node_modules/bulma"
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
            }
        ]
    }
};

