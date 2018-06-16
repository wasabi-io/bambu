process.env.NODE_ENV = process.env.NODE_ENV || "development";
const appPath = require('app-root-path');
const path = require("path");




module.exports = {
    mode: process.env.NODE_ENV,
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack"s output.
    devtool: "source-map",
    resolve: {
        alias: {
            "bambu$": path.resolve(appPath.path, "./src/index"),
            "bambu/lib": path.resolve(appPath.path, "./src")
        },
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },

    module: {
        rules: [
            // All files with a ".ts" or ".tsx" extension will be handled by "awesome-typescript-loader".
            {test: /\.tsx?$/, loader: "ts-loader"},
            {test: /\.css$/,
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
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: /node_modules\/react-styleguidist/,
                use: ['babel-loader']
            },
            {
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
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                use: "url-loader?limit=100000&name=[name].[ext]"
            }
        ]
    }
};
