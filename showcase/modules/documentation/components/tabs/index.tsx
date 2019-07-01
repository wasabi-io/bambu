import * as React from "react";
import Stateless from "component/Stateless";
import {Content} from "bambu/lib/elements/content";
import XDocEditor from "../../../view/editor/XDocEditor";
import pageStyle from "css/pageStyle";

const codes = {
    basic: require("!raw-loader?./code/1-basic"),
    alignment: [
        require("!raw-loader?./code/2-isCentered"),
        require("!raw-loader?./code/3-isRight")
    ],
    icons: require("!raw-loader?./code/4-icons"),
    sizes: [
        require("!raw-loader?./code/5-sizeSmall"),
        require("!raw-loader?./code/6-sizeMedium"),
        require("!raw-loader?./code/7-sizeLarge")
    ],
    styles: {
        isBoxed: [require("!raw-loader?./code/8-isBoxed")],
        isToggle: [require("!raw-loader?./code/9-isToggle")],
        isToggleRounded: [require("!raw-loader?./code/10-isToggleRounded")],
        isFullwidth: [require("!raw-loader?./code/11-isFullwidth")]
    },
    combining: [
        require("!raw-loader?./code/12-combining"),
        require("!raw-loader?./code/13-combining"),
        require("!raw-loader?./code/14-combining"),
        require("!raw-loader?./code/15-combining"),
    ]
};

const divider = (
    <span>
        <br/>
         <hr className="hr" style={{marginBottom: 0}}/>
        <br/>
    </span>
);

export default class Index extends Stateless <any> {
    public render() {
        return (
            <div className={pageStyle.bdContent}>
                <XDocEditor vertical={true} codes={[codes.basic]}>
                    <Content>
                        <p><strong>Tabs</strong> only require a <code>tabs</code> container and a <code>&lt;ul&gt;</code> list.<br/>
                            The <strong>default</strong> tabs style has a single border at the bottom.
                        </p>
                    </Content>
                </XDocEditor>
                {divider}
                <XDocEditor title="Alignment" vertical={true} codes={codes.alignment}>
                    <Content>
                        <p>
                            To align the tabs list, use the <code>is-centered</code> or <code>is-right</code> modifier on the <code>.tabs</code> container:
                        </p>
                    </Content>
                </XDocEditor>
                {divider}
                <XDocEditor title="Icon" vertical={true} codes={[codes.icons]}>
                    <Content>
                        <p>You can use any of the <a href="http://fontawesome.io/">Font Awesome</a> <strong>icons</strong>.</p>
                    </Content>
                </XDocEditor>
                {divider}
                <XDocEditor title="Icon" vertical={true} codes={codes.sizes}>
                    <Content>
                        <p>You can use any of the <a href="http://fontawesome.io/">Font Awesome</a> <strong>icons</strong>.</p>
                    </Content>
                </XDocEditor>
                {divider}
                <XDocEditor title="Styles" vertical={true} codes={codes.styles.isBoxed}>
                    <Content>
                        If you want a more classic style with <strong>borders</strong>, just append the <code>is-boxed</code> modifier.
                    </Content>
                </XDocEditor>
                <br/>
                <br/>
                <XDocEditor vertical={true} codes={codes.styles.isToggle}>
                    <Content>
                        If you want <strong>mutually exclusive</strong> tabs (like radio buttons where clicking one deselects all other ones), use the <code>is-toggle</code> modifier.
                    </Content>
                </XDocEditor>
                <br/>
                <br/>
                <XDocEditor vertical={true} codes={codes.styles.isToggleRounded}>
                    <div className="tags has-addons">
                        <span className="tag">New!</span>
                        <span className="tag is-info">0.6.2</span>
                    </div>
                    <Content>
                        If you use both <code>is-toggle</code> and <code>is-toggle-rounded</code>, the first and last items will be <strong>rounded</strong>.
                    </Content>
                </XDocEditor>
                <br/>
                <br/>
                <XDocEditor vertical={true} codes={codes.styles.isFullwidth}>
                    <Content>
                        If you want the tabs to take up the <strong>whole width</strong> available, use <code>is-fullwidth</code>.
                    </Content>
                </XDocEditor>
                {divider}
                <XDocEditor title="Combining" vertical={true} codes={codes.combining}>
                    <Content>
                        <p>You can <strong>combine</strong> different modifiers. For example, you can have <strong>centered boxed</strong> tabs, or <strong>fullwidth toggle</strong> ones.</p>
                    </Content>
                </XDocEditor>
            </div>
        );
    }
}
