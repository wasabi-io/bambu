import * as React from "react";
import {Stateless} from "wasabi-ui";
import pageStyle from "css/pageStyle";
import {Content} from "bambu/lib/elements/content";
import {Title} from "bambu/lib/elements/title";
import {bulma, Color, Size6} from "bambu";
import {Message, MessageBody} from "bambu/lib/components/message";
import {Tag, Tags} from "bambu/lib/elements/tag";
import DocHighlight from "../../../view/highlight/DocHighlight";
import XDocEditor from "../../../view/editor/XDocEditor";
import {Highlight} from "component/code/highlight";

const codes = {
    brand: require("!raw-loader?modules!./code/1-brand.html"),
    brand2: require("!raw-loader?modules!./code/2-brand"),
    menu3: require("!raw-loader?modules!./code/3-menu.html"),
    menu4: require("!raw-loader?modules!./code/4-menu.html"),
    startEnd5: require("!raw-loader?modules!./code/5-startend.html"),
    narbarItem: require("./code/6-navbarItem"),
    transparent: require("!raw-loader?modules!./code/7-transparent"),
    fixed: require("!raw-loader?modules!./code/8-fixed"),
    dropdown: require("!raw-loader?modules!./code/9-dropdown"),
    hoverable: `
         <NavbarItem isActive hasDropdown isHoverable>
            <!-- navbar-link, navbar-dropdown etc. -->
        </NavbarItem>
    `,
    dropdown2: require("!raw-loader?modules!./code/11-dropdown"),
    dropdownIsActive: `
         <NavbarItem isActive hasDropdown isActive>
            <!-- navbar-link, navbar-dropdown etc. -->
        </NavbarItem>
    `,
    dropdownRight: `
        <NavbarDropdown>
           <!-- NavbarItem, NavbarDivider etc. -->
        </NavbarDropdown>
    `,
    dropdownRight2: require("!raw-loader?modules!./code/14-dropdown-right"),
    dropup: `
        <NavbarItem hasDropdown hasDropdownUp isHoverable>
            <NavbarLink href="#/documentation">Docs</NavbarLink>
            <NavbarDropdown>
                <NavbarItem href="#/documentation/overview/start/">Overview</NavbarItem>
            </NavbarDropdown>
        </NavbarItem>
    `,
    dropdownUp: require("!raw-loader?modules!./code/16-dropdown-up"),
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
                <div className={pageStyle.content}>
                    <Content>
                        <p>
                            The <code>&lt;Navbar /&gt;</code> component is a responsive and versatile horizontal navigation bar with the following structure:
                        </p>
                        <ul>
                            <li>
                                <code>&lt;Navbar /&gt;</code> the <strong>main</strong> container
                                <ul>
                                    <li>
                                        <code>&lt;NavbarBrand /&gt;</code> the <strong>left side</strong>, <strong className="has-text-success">always visible</strong>, which usually contains the <strong>logo</strong> and optionally some links or icons
                                        <ul>
                                            <li>
                                                <code>&lt;NavbarBurger /&gt;</code> the <strong>hamburger</strong> icon, which toggles the navbar menu on touch devices
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <code>&lt;NavbarMenu /&gt; </code> the <strong>right side</strong>, hidden on touch devices, visible on desktop
                                        <ul>
                                            <li>
                                                <code>&lt;NavbarStart /&gt;</code> the <strong>left part</strong> of the menu, which appears next to the navbar brand on desktop
                                            </li>
                                            <li>
                                                <code>&lt;NavbarEnd /&gt;</code> the <strong>right part</strong> of the menu, which appears at the end of the navbar
                                                <ul>
                                                    <li>
                                                        <code>&lt;NavbarItem /&gt;</code> each <strong>single item</strong> of the navbar, which can either be an <code>a</code> or a <code>div</code>
                                                        <ul>
                                                            <li>
                                                                <code>&lt;NavbarLink /&gt;</code> a <strong>link</strong> as the sibling of a dropdown, with an arrow
                                                            </li>
                                                            <li>
                                                                <code>&lt;NavbarDropdown /&gt;</code> the <strong>dropdown menu</strong>, which can include navbar items and dividers
                                                                <ul>
                                                                    <li>
                                                                        <code>&lt;NavbarDivider /&gt;</code> a <strong>horizontal line</strong> to separate navbar items
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </Content>
                    {divider}
                    <DocHighlight title="NavbarBrand" lang="html" codes={[codes.brand]}>
                        <p>
                            The <code>&lt;NavbarBrand /&gt;</code> is the left side of the navbar. It can contain:
                            <ul>
                                <li>
                                    a number of <code>&lt;NavbarItem /&gt;</code>
                                </li>
                                <li>
                                    the <code>&lt;NavbarBurger /&gt;</code> as last child
                                </li>
                            </ul>
                        </p>
                    </DocHighlight>

                    <XDocEditor vertical={true} codes={[codes.brand2]}>
                        <Content>
                            <p>
                                The navbar brand is <strong>always visible</strong>: on both touch devices <span className="tag">&lt; 1024px</span>
                                and desktop <span className="tag">&gt;= 1024px</span>
                                . As a result, it is recommended to only use a few navbar items to avoid <strong>overflowing</strong> horizontally on small devices.
                            </p>
                        </Content>
                    </XDocEditor>
                    {divider}
                    <DocHighlight title="NavbarBurger" lang="html" codes={[`<NavbarBurger />`]}>
                        <p>
                            The <code>&lt;NavbarBurger /&gt;</code> is a hamburger menu that only appears on <strong>mobile</strong>. It has to appear as the last child component of <code>&lt;NavbarBrand /&gt;</code>.
                        </p>
                    </DocHighlight>
                    <br/>
                    <p>
                        You can change <code>isActive</code> modifier component to turn it into a cross.
                    </p>
                    {divider}
                    <DocHighlight title="NavbarMenu" lang="html" codes={[codes.menu3]}>
                        <p>
                            The <code>&lt;NavbarMenu /&gt;</code> is the <strong>counterpart</strong> of the <code>&lt;NavbarBrand /&gt;</code>. As such, it must appear as a direct child of <code>&lt;Navbar /&gt;</code>, as a sibling of <code>&lt;NavbarBrand /&gt;</code>.
                        </p>
                    </DocHighlight>
                    {divider}
                    <DocHighlight lang="html" codes={[codes.menu4]}>
                        <p>
                            The <code>&lt;NavbarMenu /&gt;</code> is <strong>hidden on touch devices</strong> <span className="tag">&lt; 1024px</span>
                            . You need to add the modifier property <code>isActive</code> as <code>true</code> to display it.
                        </p>
                    </DocHighlight>
                    {divider}
                    <DocHighlight lang="html" codes={[codes.startEnd5]}>
                        <p>
                            On desktop <span className="tag">&gt;= 1024px</span>
                            , the <code>&lt;NavbarMenu /&gt;</code> will <strong>fill up the space</strong> available in the navbar, leaving the navbar brand just the space it needs. It needs, however, two elements as direct children:
                        </p>
                        <ul>
                            <li>
                                <code>&lt;NavbarStart /&gt;</code>
                            </li>
                            <li>
                                <code>&lt;NavbarEnd /&gt;</code>
                            </li>
                        </ul>
                    </DocHighlight>
                    {divider}
                    <Content>
                        <h3 id="navbar-item" className="title is-4 is-spaced bd-anchor-title">
                            <a className="bd-anchor-link" href="#navbar-item">
                                # &nbsp;
                            </a>
                            <span className="bd-anchor-name">
                             NavbarItem
                          </span>
                        </h3>
                        <p>
                            A <code>navbar-item</code> is a repeatable element that can be:
                        </p>
                        <ul>
                            <li>
                                <DocHighlight lang="html" codes={[codes.narbarItem.link]}>
                                    a navigation link
                                </DocHighlight>
                            </li>
                            <li>
                                <DocHighlight lang="html" codes={[codes.narbarItem.brandLogo]}>
                                    a container for the brand logo
                                </DocHighlight>
                            </li>
                            <li>
                                <DocHighlight lang="html" codes={[codes.narbarItem.brandLogo]}>
                                    the parent of a dropdown menu
                                    <br/>
                                </DocHighlight>
                            </li>
                            <li>
                                <DocHighlight lang="html" codes={[codes.narbarItem.brandLogo]}>
                                    a child of a navbar dropdown
                                    <br/>
                                </DocHighlight>
                            </li>
                            <li>
                                <DocHighlight lang="html" codes={[codes.narbarItem.brandLogo]}>
                                    a container for almost anything you want, like a field
                                    <br/>
                                </DocHighlight>
                            </li>
                        </ul>
                        <p>
                            It can either be an anchor tag <code>&lt;a&gt;</code> or a <code>&lt;div&gt;</code>, as a <strong>direct child</strong> of either:
                        </p>
                        <ul>
                            <li>
                                <code>&lt;Navbar /&gt;</code>
                            </li>
                            <li>
                                <code>&lt;NavbarBrand /&gt;</code>
                            </li>
                            <li>
                                <code>&lt;NavbarStart /&gt;</code>
                            </li>
                            <li>
                                <code>&lt;NavbarEnd /&gt;</code>
                            </li>
                            <li>
                                <code>&lt;NavbarDropdown /&gt;</code>
                            </li>
                        </ul>
                        <p>
                            You can add the modifier class <code>isExpanded</code> to turn it into a full-width element.
                        </p>
                    </Content>
                    {divider}
                    <XDocEditor title="Transparent navbar" vertical={true} codes={[codes.transparent]}>
                        <Content>
                            <p>
                                To seamlessly integrate the navbar in any visual context, you can add the <code>isTransparent</code> modifier on the <code>&lt;Navbar /&gt;</code> component. This will remove any hover or active background from the NavbarItems.
                            </p>
                        </Content>
                    </XDocEditor>
                    {divider}
                    <Content>
                        <div className="tags has-addons">
                            <span className="tag">New!</span>
                            <span className="tag is-info">0.6.1</span>
                        </div>
                        <p>
                            You can now <strong>fix</strong> the <strong>&lt;Navbar /&gt;</strong> to either the <strong>top</strong> or <strong>bottom</strong> of the page. This is a 2-step process:
                        </p>
                        <ul className="bd-spaced">
                            <li>
                                Add either <code>isFixed="top"</code> or <code>isFixed="bottom"</code> to the <code>&lt;Navbar /&gt;</code> component
                                <br/>
                                <Highlight lang="html">
                                    {[`<Navbar isFixed={Vertical.top} />`]}
                                </Highlight>
                            </li>
                            <li>
                                Add the corresponding <code>has-navbar-fixed-top</code> or <code>has-navbar-fixed-bottom</code> modifier to either <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code> element to provide the appropriate padding to the page
                                <br/>
                                <Highlight lang="html">
                                    <span className="nt">&lt;html</span> <span className="na">class=</span><span className="s">"has-navbar-fixed-top"</span><span className="nt">&gt;</span>
                                </Highlight>
                            </li>
                        </ul>
                        <Title bSize={Size6.is5}>Try it out!</Title>
                        <XDocEditor hideCode={true} vertical={true} codes={[codes.fixed]}/>
                    </Content>
                    {divider}
                    <Content>
                        <XDocEditor previewClassName={bulma.is4} title="Dropdown menu" codes={[codes.dropdown]}>
                            <Content>
                                <p>
                                    To create a <strong>dropdown menu</strong>, you will need <strong>4</strong> elements:
                                </p>
                                <ul>
                                    <li>
                                        <code>navbar-item</code> with the <code>has-dropdown</code> modifier
                                    </li>
                                    <li>
                                        <code>navbar-link</code> which contains the dropdown arrow
                                    </li>
                                    <li>
                                        <code>navbar-dropdown</code> which can contain instances of <code>navbar-item</code> and <code>navbar-divider</code>
                                    </li>
                                </ul>
                            </Content>
                        </XDocEditor>
                    </Content>
                    {divider}
                    <Content>
                        <Title bSize={Size6.is4}>
                            Show/hide the dropdown with either <strong>CSS</strong> or <strong>JavaScript</strong>
                        </Title>
                        <Content>
                            <p>
                                The <code>&lt;NavbarDropdown /&gt;</code> is visible on touch devices <span className="tag">&lt; 1024px</span>
                                but hidden on desktop <span className="tag">&gt;= 1024px</span>
                                . <em>How</em> the dropdown is displayed on desktop depends on the parent's class.
                            </p>
                            <p>
                                The <code>&lt;NavbarItem /&gt;</code> with the <code>hasDropdown</code> modifier, has <strong>2 additional modifiers</strong>
                            </p>
                            <ul>
                                <li>
                                    <code>isHoverable</code>: the dropdown will show up when <strong>hovering</strong> the parent <code>navbarItem</code>
                                </li>
                                <li>
                                    <code>isActive</code>: the dropdown will show up <strong>all the time</strong>
                                </li>
                            </ul>
                            <Message color={Color.success}>
                                <MessageBody>
                                    While the CSS <code>:hover</code> implementation works perfectly, the <code>isActive</code> class is available for users who want to control the display of the dropdown with <strong>JavaScript</strong>.
                                </MessageBody>
                            </Message>
                            <Highlight>
                                {codes.hoverable}
                            </Highlight>
                        </Content>
                        <br/><br/>
                        <XDocEditor previewClassName={bulma.is4} codes={[codes.dropdown2]}/>
                        <br/><br/>
                        <Highlight>
                            {codes.dropdownIsActive}
                        </Highlight>
                    </Content>
                    {divider}
                    <Content>
                        <DocHighlight title="Right Dropdown" codes={[codes.dropdownRight]}>
                            <p>
                                If your parent <code>navbarItem</code> is on the right side, you can position the dropdown to start from the <strong>right</strong> with the <code>isRight</code> modifier.
                            </p>
                        </DocHighlight>
                        <br/><br/>
                        <XDocEditor vertical={true} codes={[codes.dropdownRight2]}/>
                    </Content>
                    {divider}
                    <Content>
                        <XDocEditor title="Dropup" codes={[codes.dropdownUp]}>
                            <div className="tags has-addons">
                                <span className="tag">New!</span>
                                <span className="tag is-info">0.6.1</span>
                            </div>
                            <Tags hasAddons>
                                <Tag>New!</Tag>
                                <Tag color={Color.info}>New!</Tag>
                            </Tags>
                            <p>
                                If you're using a navbar at the bottom, like the <a href="#fixed-navbar">fixed bottom navbar</a>, you might want to use a <strong>dropup menu</strong>. Simply add the <code>hasDropdown</code> and <code>hasDropdownUp</code> modifiers to the parent <code>&lt;NavbarItem /&gt;</code>.
                            </p>
                            <Highlight language="html">
                                {codes.dropup}
                            </Highlight>
                            <br/>
                        </XDocEditor>
                    </Content>
                    {divider}
                </div>
            </div>
        );
    }
}
