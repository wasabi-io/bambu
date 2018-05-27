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
    icon: require("!raw-loader?modules!./code/4-icon"),
    hasArrowSeparator: require("!raw-loader?modules!./code/5-has-arrow-separator"),
    hasBulletSeparator: require("!raw-loader?modules!./code/6-has-bullet-separator"),
    hasDotSeparator: require("!raw-loader?modules!./code/7-has-dot-separator"),
    hasSucceedsSeparator: require("!raw-loader?modules!./code/8-has-succeeds-separator"),
    sizeSmall: require("!raw-loader?modules!./code/9-size-small"),
    sizeMedium: require("!raw-loader?modules!./code/10-size-medium"),
    sizeLarge: require("!raw-loader?modules!./code/11-size-large"),
};

const breadCrumbImport = `import { BreadCrumb, BreadCrumbItem } from "bambu/lib/components/breadcrumb";`;

export default class Index extends Stateless <any> {
    public render() {
        return (
            <div>
                {Index.renderTitle()}
                <hr/>
                {Index.renderImporting()}
                <hr/>
                {Index.renderIsActive()}
                <hr/>
                {Index.renderAlignment()}
                <hr/>
                {Index.renderIcon()}
                <hr/>
                {Index.renderSeparator()}
                <hr/>
                {Index.renderSizes()}
                <hr />
                <p>For more information <a href="https://bulma.io/documentation/components/breadcrumb/">
                        https://bulma.io/documentation
                        <wbr/>/components/breadcrumb/
                    </a>
                </p>
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
                <br/>
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
                <Editor isSnippet code={codes.isActive}/>
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
                <br/>
                <Editor isSnippet code={codes.isCentered}/>
                <br/>
                <Editor isSnippet code={codes.isRight}/>
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
                <br/>
                <Editor isSnippet code={codes.icon}/>
            </div>
        );
    }

    public static renderSeparator() {
        return (
            <div>
                <Title bSize={Size6.is4} className={classNames(bulma.isSpaced, bulmaDocs.bdAnchorTitle)}>
                    <span className={bulmaDocs.bdAnchorName}>
                        Alternative separators
                    </span>
                    <a className={bulmaDocs.bdAnchorLink}>
                        #
                    </a>
                </Title>
                <p>You can choose between <strong>4 additional separators</strong>: <code>has-arrow-separator</code> <code>has-bullet-separator</code> <code>has-dot-separator</code> and <code>has-succeeds-separator</code>.</p>
                <br/>
                <Editor isSnippet code={codes.hasArrowSeparator}/>
                <br/>
                <Editor isSnippet code={codes.hasBulletSeparator}/>
                <br/>
                <Editor isSnippet code={codes.hasDotSeparator}/>
                <br/>
                <Editor isSnippet code={codes.hasSucceedsSeparator}/>
            </div>
        );
    }

    public static renderSizes() {
        return (
            <div>
                <Title bSize={Size6.is4} className={classNames(bulma.isSpaced, bulmaDocs.bdAnchorTitle)}>
                    <span className={bulmaDocs.bdAnchorName}>
                        Sizes
                    </span>
                    <a className={bulmaDocs.bdAnchorLink}>
                        #
                    </a>
                </Title>
                <p>You can choose between <strong>3 additional sizes</strong>: <code>is-small</code> <code>is-medium</code> and <code>is-large</code>.</p>
                <br/>
                <Editor isSnippet code={codes.sizeSmall}/>
                <br/>
                <Editor isSnippet code={codes.sizeMedium}/>
                <br/>
                <Editor isSnippet code={codes.sizeLarge}/>
            </div>
        );
    }
}
