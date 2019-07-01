import * as React from "react";
import XDocEditor from "modules/view/editor/XDocEditor";
import DocHighlight from "modules/view/highlight/DocHighlight";

const codes = {
    isActive: require("!raw-loader?./code/1-isActive"),
    isCentered: require("!raw-loader?./code/2-isCentered"),
    isRight: require("!raw-loader?./code/3-isRight"),
    icon: require("!raw-loader?./code/4-icon"),
    hasArrowSeparator: require("!raw-loader?./code/5-has-arrow-separator"),
    hasBulletSeparator: require("!raw-loader?./code/6-has-bullet-separator"),
    hasDotSeparator: require("!raw-loader?./code/7-has-dot-separator"),
    hasSucceedsSeparator: require("!raw-loader?./code/8-has-succeeds-separator"),
    sizeSmall: require("!raw-loader?./code/9-size-small"),
    sizeMedium: require("!raw-loader?./code/10-size-medium"),
    sizeLarge: require("!raw-loader?./code/11-size-large"),
};

const breadCrumbImport = `import { BreadCrumb, BreadCrumbItem } from "bambu/lib/components/breadcrumb";`;

const Index: React.SFC<{}> = () => {
    return (
        <div>
            <div>
                <p>The <strong>BreadCrumb</strong> component requires to import and only <strong>BreadCrumbItem</strong> component can added as children.</p>
                <p>The dividers are automatically created in the content of the <code>::before</code> pseudo-element of <strong>BreadCrumbItem</strong> components.</p>
            </div>
            <hr/>
            <DocHighlight codes={[breadCrumbImport]}>
                <p>Importing <strong>BreadCrumb</strong>, <strong>BreadCrumbItem</strong> components</p>
            </DocHighlight>
            <hr/>
            <XDocEditor vertical={true} codes={[codes.isActive]}>
                <p>You can inform the current page using the <code>isActive</code> property in <strong>BreadCrumbItem</strong> component. It will disable the navigation of inner links.</p>
            </XDocEditor>
            <hr/>
            <XDocEditor vertical={true} title="Alignment" codes={[codes.isCentered, codes.isRight]}>
                <p>For alternative alignments, use the <code>isCentered</code> and <code>isRight</code> <strong>boolean</strong> properties on the <code>BreadCrumb</code> component</p>
            </XDocEditor>
            <hr/>
            <XDocEditor vertical={true} title="Icon" codes={[codes.icon]}>
                <p>You can use any of the <a href="https://fontawesome.com/" target="_blank">Font Awesome</a> <strong>icons</strong>.</p>
            </XDocEditor>
            <hr/>
            <XDocEditor vertical={true} title="Alternative separators" codes={[codes.hasArrowSeparator, codes.hasBulletSeparator, codes.hasDotSeparator, codes.hasSucceedsSeparator]}>
                <p>You can choose between <strong>4 additional separators</strong>: <code>has-arrow-separator</code> <code>has-bullet-separator</code> <code>has-dot-separator</code> and <code>has-succeeds-separator</code>.</p>
            </XDocEditor>
            <hr/>
            <XDocEditor vertical={true} title="Sizes" codes={[codes.sizeSmall, codes.sizeMedium, codes.sizeLarge]}>
                <p>You can choose between <strong>3 additional sizes</strong>: <code>is-small</code> <code>is-medium</code> and <code>is-large</code>.</p>
            </XDocEditor>
            <hr/>
            <p>For more information <a href="https://bulma.io/documentation/components/breadcrumb/">
                https://bulma.io/documentation
                <wbr/>/components/breadcrumb/
            </a>
            </p>
        </div>
    );
};
export default Index;
