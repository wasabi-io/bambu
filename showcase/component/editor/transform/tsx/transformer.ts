import * as ts from "typescript";
import {Props} from "wasabi-common";

let modules: Props<any> = {};

function execute(value: string) {
    let exports: any;
    const require = (name: string) => {
        const module = modules[name];
        if (!module) {
            console.log("moduleList", modules);
            throw new Error(`${name} module not found in the defined module list ! Check moduleList at console.`);
        }
        return module;
    };

    exports = {};
    eval(`${value}`);
    return exports.default;
}

export interface TransformResult {
    phase?: "Transform" | "Execute";
    Component: any;
    success: boolean;
}

class Transformer {

    public addModule(name: string, module: any) {
        modules[name] = module;
    }

    public addModules(props: Props<any>) {
        modules = {...modules, ...props};
    }

    public transformTypescript(code: string) {
        /*
            "target": "es5",
            "module": "commonjs",
            "moduleResolution": "node",
            "emitDecoratorMetadata": true,
            "removeComments": false,
            "allowSyntheticDefaultImports": true,
            "noImplicitAny": true,
            "pretty": true,
            "experimentalDecorators": true,
            "preserveConstEnums": true,
            "allowJs": false,
            "lib": [
            "es2015"
            ],
            "sourceMap": true,
            "jsx": "react",
            "outDir": "lib",
        */
        return ts.transpileModule(code, {
                compilerOptions: {
                    module: ts.ModuleKind.CommonJS,
                    target: ts.ScriptTarget.ES5,
                    jsx: ts.JsxEmit.React,
                    // moduleResolution: ts.ModuleResolutionKind.NodeJs,
                    emitDecoratorMetadata: true,
                    removeComments: false,
                    allowSyntheticDefaultImports: true,
                    noImplicitAny: true,
                    pretty: true,
                    experimentalDecorators: true,
                    preserveConstEnums: true,
                    allowJs: false,
                    sourceMap: false,
                    lib: [
                        "es2015"
                    ]
                }
            }
        ).outputText;
    }

    public execute(code: any): TransformResult {
        let transformedCode;
        try {
            transformedCode = this.transformTypescript(code);
        } catch (e) {
            return {
                phase: "Transform",
                Component: e,
                success: false
            };
        }
        let result: any;
        try {
            result = execute(transformedCode);
        } catch (e) {
            return {
                phase: "Execute",
                Component: e,
                success: false
            };
        }
        return {
            Component: result,
            success: true
        };
    }

    /*
    public transformBabel(code: string) {
        const babelCore = require("@babel/standalone");
        const options = {
            plugins: ["transform-modules-umd"],
            presets: ['react', "typescript"]
        };
        return babelCore.transform(code, options).code;
    }
    */
}

const transformer = new Transformer();

export default transformer;
