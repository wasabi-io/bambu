const path = require("path");
const glob = require("glob");
const docGen = require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {});
const fs = require('fs');
process.env.NODE_ENV = "development";
const config =  {
    title: 'Bambu React Docs',
    ignore: ['**/__test__/**', '**/lib/**', '**/tools/**'],
    components: () => {
        return glob.sync("src/**/*.tsx")
            .filter(function (module) {
                return /\/[A-Z]\w*\.tsx$/.test(module);
            });
    },
    propsParser: docGen.parse,
    webpackConfig: Object.assign({}, require("./tools/app/docs/webpack.js"), {}),
    styleguideComponents: {
        //Wrapper: path.join(__dirname, 'showcase/modules/react-docs/Wrapper')
        //LogoRenderer: path.join(__dirname, 'showcase/modules/react-docs/components/Logo'),
        StyleGuideRenderer: path.join(__dirname, 'showcase/modules/react-docs/components/StyleGuide'),
        // SectionsRenderer: path.join(__dirname, 'showcase/modules/react-docs/components/Sections')
    },
    styleguideDir: "docs/react-docs"
};
/*
fs.readdirSync("showcase/modules/react-docs/rsg-components/").forEach(file => {
    config.styleguideComponents[`${file}Renderer`] = path.join(__dirname, `showcase/modules/react-docs/rsg-components/${file}`)
});
*/


module.exports = config;