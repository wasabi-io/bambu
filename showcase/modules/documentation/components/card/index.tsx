import * as React from "react";
import {default as XDocEditor} from "modules/view/editor/XDocEditor";
import pageStyle from "css/pageStyle";

const codes = {
    basic: require("!raw-loader?modules!./code/1-basic"),
    basic2: require("!raw-loader?modules!./code/2-basic"),
    basic3: require("!raw-loader?modules!./code/3-basic")
};

const breadCrumbImport = `import { BreadCrumb, BreadCrumbItem } from "bambu/lib/components/breadcrumb";`;

const Index: React.SFC<{}> = () => {
    return (
        <div className={pageStyle.bdContent}>
            <div className={pageStyle.content}>
                <p>The <strong>Card</strong> component comprises several elements that you can mix and match:</p>
                <ul>
                    <li>
                        <code>&lt;Card /&gt;</code>: the main container
                        <ul>
                            <li>
                                <code>&lt;CardHeader /&gt;</code>: a horizontal bar with a shadow
                                <ul>
                                    <li>
                                        <code>&lt;CardHeaderTitle /&gt;</code>: a left-aligned bold text
                                    </li>
                                    <li>
                                        <code>&lt;CardHeaderIcon /&gt;</code>: a placeholder for an icon
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <code>&lt;CardImage /&gt;</code>: a fullwidth container for a responsive image
                            </li>
                            <li>
                                <code>&lt;CardContent /&gt;</code>: a multi-purpose container for <em>any</em> other element
                            </li>
                            <li>
                                <code>&lt;CardFooter /&gt;</code>: a horizontal list of controls
                                <ul>
                                    <li>
                                        <code>&lt;CardFooterItem /&gt;</code>: a repeatable list item
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <br/>
            <div className="tags has-addons">
                <span className="tag">New</span>
                <span className="tag is-info">0.5.3</span>
            </div>
            <hr/>
            <p>
                You can center the <code>CardHeaderTitle</code> by appending the <code>isCentered</code> modifier.
            </p>
            <XDocEditor codes={[codes.basic, codes.basic2, codes.basic3]}/>
            <hr/>
            <p>For more information <a href="https://bulma.io/documentation/components/card/">
                https://bulma.io/documentation
                <wbr/>/components/card/
            </a>
            </p>
        </div>
    );
};
export default Index;
