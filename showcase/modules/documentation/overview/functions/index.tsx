import * as React from "react";
import {Stateless} from "wasabi-ui";
import XDocEditor from "modules/view/editor/XDocEditor";

const codes = {
    isActive: require("!raw-loader?modules!./code/1-isActive")
};

export default class Index extends Stateless <any> {
    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <XDocEditor codes={[codes.isActive]}/>
        );
    }

    public onChange = (value: string) => {
        console.log(value);
    }
}
