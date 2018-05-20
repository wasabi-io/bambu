const path = require("path");
const glob = require("glob");

module.exports = {
    components: () => {
        return glob.sync("src/**/*.tsx").filter(file => {
            return true;
        });
    },
    propsParser: require("react-docgen-typescript").parse,
    webpackConfig: Object.assign({}, require("./tools/app/docs/webpack.js"), {}),
    styleguideComponents: {
        //Wrapper: path.join(__dirname, 'showcase/modules/react-docs/Wrapper')
        //LogoRenderer: path.join(__dirname, 'showcase/modules/react-docs/components/Logo'),
        StyleGuideRenderer: path.join(__dirname, 'showcase/modules/react-docs/components/StyleGuide')
        //SectionsRenderer: path.join(__dirname, 'showcase/modules/react-docs/components/Sections'),
    },
    styleguideDir: "docs/react-docs"
};
