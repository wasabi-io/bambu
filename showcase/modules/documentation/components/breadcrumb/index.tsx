import * as classNames from "classnames";
import * as React from "react";
import {Stateless} from "wasabi-ui";
import bulmaDocs from "css/bulmaDocs";
import Editor from "component/code/editor/Editor";
import {Highlight} from "component/code/highlight";
import {Title} from "bambu/lib/elements/title";
import {bulma, Size6} from "bambu";

const codes = {
    isActive: require("!raw-loader?modules!./code/1-isActive"),
    isCentered: require("!raw-loader?modules!./code/2-isCentered"),
    isRight: require("!raw-loader?modules!./code/3-isRight"),
};

const breadCrumbImport = `import { BreadCrumb, BreadCrumbItem } from "bambu/lib/components/breadcrumb";`;

export default class Index extends Stateless <any> {
    public render() {
        return (
            <div>
                {Index.renderTitle()}
                <hr />
                {Index.renderImporting()}
                <hr />
                {Index.renderIsActive()}
                <hr />
                {Index.renderAlignment()}
                <hr />
                {Index.renderIcon()}
            </div>
        );
    }

    public static renderTitle() {
        return (
            <div>
                <p>
                    The <strong>BreadCrumb</strong> component requires to import and only <strong>BreadCrumbItem</strong> component can added as children.
                </p>
                <p>
                    The dividers are automatically created in the content of the <code>::before</code> pseudo-element of <strong>BreadCrumbItem</strong> components.
                </p>
            </div>
        );
    }
    public static renderImporting() {
        return (
            <div>
                <p>Importing <strong>BreadCrumb</strong>, <strong>BreadCrumbItem</strong> components</p>
                <br />
                <Highlight language={"javascript"}>
                    {breadCrumbImport}
                </Highlight>
            </div>
        );
    }

    public static renderIsActive() {
        return (
            <div>
                <p>You can inform the current page using the <code>isActive</code> property in <strong>BreadCrumbItem</strong> component. It will disable the navigation of inner links.</p>
                <Editor isSnippet code={codes.isActive} />
            </div>
        );
    }
    public static renderAlignment() {
        return (
            <div>
                <Title bSize={Size6.is4} className={classNames(bulma.isSpaced, bulmaDocs.bdAnchorTitle)}>
                    <span className={bulmaDocs.bdAnchorName}>
                        Alignment
                    </span>
                    <a className={bulmaDocs.bdAnchorLink}>
                        #
                    </a>
                </Title>
                <p>For alternative alignments, use the <code>isCentered</code> and <code>isRight</code> <strong>boolean</strong> properties on the <code>BreadCrumb</code> component</p>
                <br />
                <Editor isSnippet code={codes.isCentered} />
                <br />
                <Editor isSnippet code={codes.isRight} />
            </div>
        );
    }

    public static renderIcon() {
        return (
            <div>
                <Title bSize={Size6.is4} className={classNames(bulma.isSpaced, bulmaDocs.bdAnchorTitle)}>
                    <span className={bulmaDocs.bdAnchorName}>
                        Icon
                    </span>
                    <a className={bulmaDocs.bdAnchorLink}>
                        #
                    </a>
                </Title>
                <p>You can use any of the <a href="https://fontawesome.com/" target="_blank">Font Awesome</a> <strong>icons</strong>.</p>
                <br />
                <Editor isSnippet code={codes.isCentered} />
                <br />
                <Editor isSnippet code={codes.isRight} />
            </div>
        );
    }
}
