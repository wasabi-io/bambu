import * as React from "react";
import Stateless from "component/Stateless";
import pageStyle from "css/pageStyle";
import {Content} from "bambu/lib/elements/content";
import XDocEditor from "modules/view/editor/XDocEditor";

const codes = {
    basic: require("!raw-loader?modules!./code/1-basic")
};

export default class Index extends Stateless <any> {
    public render() {
        return (
            <div className={pageStyle.bdContent}>
                <XDocEditor codes={[codes.basic]}>
                    <Content>
                        <p>
                            The <code>panel</code> is container for several types:
                        </p>
                        <ul>
                            <li>
                                <code>panel-heading</code> as the first child
                            </li>
                            <li>
                                <code>panel-tabs</code> for navigation
                            </li>
                            <li>
                                <code>panel-block</code> which can contain other elements, like:
                                <ul>
                                    <li><code>control</code></li>
                                    <li><code>input</code></li>
                                    <li><code>button</code></li>
                                    <li><code>panel-icon</code></li>
                                </ul>
                            </li>
                        </ul>
                        <p>
                            The <code>panel-block</code> can be an anchor tag <code>&lt;a&gt;</code> or a label <code>&lt;label&gt;</code> with a checkbox inside.
                        </p>
                    </Content>
                </XDocEditor>
            </div>
        );
    }
}
