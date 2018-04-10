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
    return {
        test: /\.css$/, use: ["style-loader", "css-loader"]
    };
};

const getSassLoader = function () {
    return {
        test: /\.sass$/, use: [
            {loader: 'style-loader', options: {sourceMap: true}},
            {
                loader: "typings-for-css-modules-loader",
                options: {
                    sass: true,
                    modules: true
                }
            },
            {loader: 'sass-loader', options: {sourceMap: true}}
        ]
    };
};

const getScssLoader = function () {
    return {
        test: /\.scss$/, use: [
            {loader: 'style-loader', options: {sourceMap: true}},
            {
                loader: "typings-for-css-modules-loader",
                options: {
                    namedExport: true,
                    camelCase: true,
                    modules: true
                }
            },
            {loader: 'sass-loader', options: {sourceMap: true}}
        ]
    };
};


const getFileLoader = function () {
    return {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, use: "file-loader", include: /fonts/};
};

const getUrlLoader = function () {
    return {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        use: "url-loader?limit=100000&name=[name].[ext]"
    };
};

const htmlLoader = function () {
    return {
        test: /\.html?$/,
        use: [{
            loader: 'html-loader',
            options: {
                minimize: true
            }
        }]
    };
};

const rules = {
    ts: getTsLoader,
    tsLint: getTsLintLoader,
    css: getCssLoader,
    sass: getSassLoader,
    scss: getScssLoader,
    file: getFileLoader,
    url: getUrlLoader,
    html: htmlLoader
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