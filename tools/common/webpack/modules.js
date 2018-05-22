const Objects = require("../util/Objects");

const getTsLoader = function () {
    return {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
            transpileOnly: true
        }
    }
};

const getTsLintLoader = function () {
    return {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
            /* Loader options go here */
        }
    }
};

const getCssLoader = function () {
    return {test: /\.css$/,
        use: [
            "style-loader",
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    getLocalIdent: (context, localIdentName, localName, options) => {
                        return localName;
                    }
                }
            }
        ]
    }
};


const getSassLoader = function () {
    return {
        test: /\.sass$/, use: [
            {loader: 'style-loader', options: {sourceMap: true}},
            {
                loader: "css-loader",
                options: {
                    sass: true,
                    modules: true
                }
            },
            {loader: 'sass-loader', options: {sourceMap: true}}
        ]
    }
};

const getScssLoader = function () {
    return {
        test: /\.scss$/, use: [
            {loader: 'style-loader', options: {sourceMap: true}},
            {
                loader: "typings-for-css-modules-loader",
                options: {
                    modules: true
                }
            },
            {loader: 'sass-loader', options: {sourceMap: true}}
        ]
    };
};

const getUrlLoader = function () {
    return {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        use: "url-loader?limit=100000&name=[name].[ext]"
    };
};

const rules = {
    ts: getTsLoader,
    tsLint: getTsLintLoader,
    css: getCssLoader,
    sass: getSassLoader,
    scss: getScssLoader,
    url: getUrlLoader
};

const configurer = function (loader, webpackRules) {
    for (const key in loader) {
        if (loader.hasOwnProperty(key) && rules[key]) {
            const rule = rules[key]();
            if (!rule) {
                throw new Error(key + " rule not found !")
            }

            const options = loader[key];
            if (typeof options !== "boolean") {
                if (!rule.options) {
                    rule.options = options;
                } else {
                    rule.options = Objects.merge(options, rule.options);
                }
            }

            webpackRules.push(rule);
        }
    }
};

module.exports = configurer;