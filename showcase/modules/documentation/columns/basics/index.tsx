import * as React from "react";
import {Stateless} from "wasabi-ui";
import Editor from "component/code/editor/Editor";

const codeText = require("!raw-loader?modules!./code/Code1");

export default class Index extends Stateless <any> {
    public render() {
        return (
            <div>
                <Editor code={codeText} />
            </div>
        );
    }
}
