import * as React from "react";
import {Stateless} from "wasabi-ui";
import XDocEditor from "modules/view/editor/XDocEditor";

const codes = {
    basic: require("!raw-loader?modules!./code/1-basic")
};

export default class Index extends Stateless <any> {
    public render() {
        return (
            <div>
                <div>
                    <p>Building a <strong>columns layout</strong> with Bulma is very simple:</p>
                    <ol>
                        <li>Add a <code>columns</code> container</li>
                        <li>Add as many <code>column</code> elements as you want</li>
                    </ol>
                    <p>Each column will have an <strong>equal width</strong>, no matter the number of columns.</p>
                </div>
                <XDocEditor vertical codes={[codes.basic]}/>
            </div>
        );
    }
}
