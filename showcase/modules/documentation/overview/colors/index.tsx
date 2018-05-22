import * as React from "react";
import {Stateless} from "wasabi-ui";
import Highlight from "component/code/highlight/Highlight";

const codeText = require("!raw-loader?modules!./index");

export default class Index extends Stateless <any> {
    public render() {

        return (
            <Highlight language="es6">
                { codeText }
            </Highlight>
        );
    }
}
