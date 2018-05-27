import * as React from "react";
import {Stateless} from "wasabi-ui";
import Editor from "../../../../component/code/editor/Editor";
import {bulma, Size, Size6} from "bambu";
import bulmaDocs from "../../../../css/bulmaDocs";
import * as classNames from "classnames";
import {Title} from "bambu/lib/elements/title";
import {Cell, Row, Table, TBody} from "bambu/lib/elements/table";
import THead from "bambu/lib/elements/table/Thead";
import HCell from "bambu/lib/elements/table/HCell";
import Icon from "bambu/lib/elements/icon/Icon";
import {default as FaIcon, FaIconEffect, FaIconFlip, FaIconSize} from "bambu/lib/elements/icon/FaIcon";
import {Highlight} from "../../../../component/code/highlight";
import transformer from "../../../../component/code/transform/transformer";
import {MaIcon, MaIconColor, MaIconFlip, MaIconSize} from "bambu/lib/elements/icon";

const codes = {
    icon: require("!raw-loader?modules!./code/1-icon"),
    colors: require("!raw-loader?modules!./code/2-colors"),
    stack: require("!raw-loader?modules!./code/3-stack"),
    stack2: require("!raw-loader?modules!./code/3-stack2")
};

const iconSizeWrapper = (name?: string, value?: any) => {
    if (value) {
        return <code>{`${name}={${value}}`}</code>;
    }
    return null;
};

const braces = (value: any) => {
    return `{${value}}`;
};

export default class Index extends Stateless <any> {
    public render() {
        return (
            <div>
                {Index.renderTitle()}
                {Index.renderIcon()}
                <hr/>
                {Index.renderColors()}
                <hr/>
                {Index.renderSizes()}
                <hr/>
                {Index.renderFontAwesome()}
                <p>For more information
                    <a href="https://bulma.io/documentation/elements/icon/">
                        https://bulma.io/documentation/elements/icon/
                    </a>
                </p>
                <hr/>
                {Index.renderMaterialDesign()}
            </div>
        );
    }

    public static renderTitle() {
        return (
            <p>The <code>icon</code> element is a <strong>container</strong> for any type of <strong>icon font</strong>. Because the icons can take a few seconds to load, and because you want control over the <strong>space</strong> the icons will take, you can use the <code>icon</code> class as a reliable square container that will prevent the page to "jump" on page load.</p>
        );
    }

    public static renderIcon() {
        return (
            <div>
                <p>You can inform the current page using the <code>isActive</code> property in <strong>BreadCrumbItem</strong> component. It will disable the navigation of inner links.</p>
                <Editor isSnippet code={codes.icon}/>
                <hr/>
                <p>
                    By default, the <code>icon</code> container will take up <em>exactly</em> <code>1.5rem x 1.5rem</code>. The icon itself is sized accordingly to the icon library you're using. For example, Font Awesome 5 icons will <strong>inherit</strong> the font size.</p>
            </div>
        );
    }

    public static renderColors() {
        return (
            <div>
                <Title bSize={Size6.is4} className={classNames(bulma.isSpaced, bulmaDocs.bdAnchorTitle)}>
                    <span className={bulmaDocs.bdAnchorName}>
                        Colors
                    </span>
                    <a className={bulmaDocs.bdAnchorLink}>
                        #
                    </a>
                </Title>
                <p>For alternative alignments, use the <code>isCentered</code> and <code>isRight</code> <strong>boolean</strong> properties on the <code>BreadCrumb</code> component</p>
                <br/>
                <Editor isSnippet code={codes.colors}/>
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
                <p>The Bulma <code>icon</code> container comes in <strong>4 sizes</strong>. It should always be <em>slightly bigger</em> than the icon it contains. For example, Font Awesome 5 icons use a font-size of <code>1em</code> by default (since it inherits the font size), but provides <a href="https://fontawesome.com/how-to-use/svg-with-js#additional-styling" target="_blank">additional sizes</a></p>
                <br/>
                <Table isBordered>
                    <THead>
                    <Row>
                        <HCell>Bulma Size</HCell>
                        <HCell>Container size</HCell>
                        <HCell>Font Awesome Size</HCell>
                        <HCell>Icon size</HCell>
                        <HCell>Result</HCell>
                    </Row>
                    </THead>
                    <TBody>
                    <Row>
                        <Cell>{iconSizeWrapper('bSize', 'Size.small')}</Cell>
                        <Cell><code>1rem x 1rem</code></Cell>
                        <Cell>{iconSizeWrapper()}</Cell>
                        <Cell><code>1em</code></Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon bSize={Size.small}><FaIcon name="home" className="fa-w18"/></Icon>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell rowSpan={2}>{iconSizeWrapper()}</Cell>
                        <Cell rowSpan={2}><code>1.5rem x 1.5rem</code></Cell>
                        <Cell>{iconSizeWrapper()}</Cell>
                        <Cell><code>1em</code></Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon bSize={Size.small}><FaIcon name="home" className="fa-w18"/></Icon>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>{iconSizeWrapper('bSize', 'FaIconSize.isLg')}</Cell>
                        <Cell><code>1.33em</code></Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon bSize={Size.small}><FaIcon name="home" className="fa-w18"/></Icon>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell rowSpan={3}>{iconSizeWrapper('bSize', 'Size.medium')}</Cell>
                        <Cell rowSpan={3}><code>2rem x 2rem</code></Cell>
                        <Cell>{iconSizeWrapper()}</Cell>
                        <Cell><code>1em</code></Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon bSize={Size.medium}><FaIcon name="home" className="fa-w18"/></Icon>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>{iconSizeWrapper('bSize', 'FaIconSize.isLg')}</Cell>
                        <Cell><code>1.33em</code></Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon bSize={Size.medium}><FaIcon name="home" className="fa-w18"/></Icon>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>{iconSizeWrapper('bSize', 'FaIconSize.is2x')}</Cell>
                        <Cell><code>2em</code></Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon bSize={Size.medium}><FaIcon name="home" className="fa-w18"/></Icon>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell rowSpan={4}>{iconSizeWrapper('bSize', 'Size.large')}</Cell>
                        <Cell rowSpan={4}><code>3rem x 3rem</code></Cell>
                        <Cell>{iconSizeWrapper()}</Cell>
                        <Cell><code>1em</code></Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon bSize={Size.large}><FaIcon name="home" className="fa-w18"/></Icon>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>{iconSizeWrapper('bSize', 'FaIconSize.isLg')}}</Cell>
                        <Cell><code>1.33em</code></Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon bSize={Size.large}><FaIcon name="home" className="fa-w18"/></Icon>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>{iconSizeWrapper('bSize', 'FaIconSize.is2x')}</Cell>
                        <Cell><code>2em</code></Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon bSize={Size.large}><FaIcon name="home" className="fa-w18"/></Icon>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>{iconSizeWrapper('bSize', 'FaIconSize.is3x')}</Cell>
                        <Cell><code>3em</code></Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon bSize={Size.large}><FaIcon name="home" className="fa-w18"/></Icon>
                        </Cell>
                    </Row>
                    </TBody>
                </Table>
            </div>
        );
    }

    public static renderFontAwesome() {
        return (
            <div>
                <Title bSize={Size6.is4} className={classNames(bulma.isSpaced, bulmaDocs.bdAnchorTitle)}>
                    <span className={bulmaDocs.bdAnchorName}>
                        Font Awesome variations
                    </span>
                    <a className={bulmaDocs.bdAnchorLink}>
                        #
                    </a>
                </Title>
                <p>
                    Font Awesome also provides modifier classes for:
                </p>
                <ul style={{listStyleType: "circle"}}>
                    <li>
                        fixed width icons
                    </li>
                    <li>
                        bordered icons
                    </li>
                    <li>
                        animated icons
                    </li>
                    <li>
                        rotated &amp; flipped icons
                    </li>
                    <li>
                        stacked icons
                    </li>
                </ul>
                <br/>
                <Table isBordered>
                    <THead>
                    <Row>
                        <HCell>Type</HCell>
                        <HCell>Font Awesome Properties</HCell>
                        <HCell>Result</HCell>
                    </Row>
                    </THead>
                    <TBody>
                    <Row>
                        <Cell>
                            Fixed width
                        </Cell>
                        <Cell>
                            <code>fixed={braces(true)}</code>
                        </Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon><FaIcon name="home" fixed/></Icon>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>
                            Bordered
                        </Cell>
                        <Cell>
                            <code>border={braces(true)}</code>
                        </Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon><FaIcon border name="home" className="fa-w18"/></Icon>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell key={"cell1"}>
                            Animated
                        </Cell>
                        <Cell key={"cell2"}>
                            <code>spinner={braces(true)} pulse={braces(true)}</code>
                        </Cell>
                        <Cell key={"cell3"} className={bulmaDocs.bdIconSize}>
                            <Icon><FaIcon effect={FaIconEffect.pulse} name="spinner"/></Icon>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell key={"cell1"}>
                            Rotated &amp; flipped
                        </Cell>
                        <Cell key={"cell2"}>
                            <code>name="shield-alt"</code><br/>
                            <code>name="shield-alt"</code> <code>rotate={braces(90)}</code><br/>
                            <code>name="shield-alt"</code> <code>rotate={braces(180)}</code><br/>
                            <code>name="shield-alt"</code> <code>rotate={braces(270)}</code><br/>
                            <code>name="shield-alt"</code> <code>flip={braces(`IconFlip.horizontal`)}</code><br/>
                            <code>name="shield-alt"</code> <code>flip={braces(`IconFlip.vertical`)}</code>
                        </Cell>
                        <Cell key={"cell3"} className={bulmaDocs.bdIconSize}>
                            <Icon><FaIcon name="shield-alt"/></Icon><br/>
                            <Icon><FaIcon name="shield-alt" rotate={90}/></Icon><br/>
                            <Icon><FaIcon name="shield-alt" rotate={180}/></Icon><br/>
                            <Icon><FaIcon name="shield-alt" rotate={270}/></Icon><br/>
                            <Icon><FaIcon name="shield-alt" flip={FaIconFlip.horizontal}/></Icon><br/>
                            <Icon><FaIcon name="shield-alt" flip={FaIconFlip.vertical}/></Icon><br/>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell key={"cell1"} rowSpan={2}>
                            Stacked
                        </Cell>
                        <Cell key={"cell2"}>
                            <div>
                                <Highlight>
                                    {codes.stack}
                                </Highlight>
                            </div>
                        </Cell>
                        <Cell key={"cell3"}>
                            {Index.createComponent(codes.stack)}
                        </Cell>
                    </Row>
                    <Row>
                        <Cell key={"cell2"}>
                            <div>
                                <Highlight>
                                    {codes.stack2}
                                </Highlight>
                            </div>
                        </Cell>
                        <Cell key={"cell3"}>
                            {Index.createComponent(codes.stack2)}
                        </Cell>
                    </Row>
                    </TBody>
                </Table>
            </div>
        );
    }

    public static renderMaterialDesign() {
        return (
            <div>
                <div>
                    <Title bSize={Size6.is4} className={classNames(bulma.isSpaced, bulmaDocs.bdAnchorTitle)}>
                    <span className={bulmaDocs.bdAnchorName}>
                        Material Design Icons
                    </span>
                        <a className={bulmaDocs.bdAnchorLink}>
                            #
                        </a>
                    </Title>
                    <p>
                        Here is how the <code>icon</code> container can be used with <a href="https://materialdesignicons.com">Material Design Icons</a>.
                    </p>
                    <br/>
                    <Table isBordered>
                        <THead>
                        <Row>
                            <HCell>Icon Component</HCell>
                            <HCell>Container size</HCell>
                            <HCell>MDI Component</HCell>
                            <HCell>Icon size</HCell>
                            <HCell>Result</HCell>
                        </Row>
                        </THead>
                        <TBody>
                        <Row>
                            <Cell>
                                <code>{iconSizeWrapper('bSize', 'Size.small')}</code>
                            </Cell>
                            <Cell>
                                <code>1rem x 1rem</code>
                            </Cell>
                            <Cell/>
                            <Cell>
                                <code>1em</code>
                            </Cell>
                            <Cell className={bulmaDocs.bdIconSize}>
                                <Icon bSize={Size.small}><MaIcon name="bell"/></Icon>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell rowSpan={2}>

                            </Cell>
                            <Cell rowSpan={2}>
                                <code>1.5rem x 1.5rem</code>
                            </Cell>
                            <Cell>
                                <code>{iconSizeWrapper('bSize', 'MaIconSize.is18px')}</code>
                            </Cell>
                            <Cell>
                                <code>18px</code>
                            </Cell>
                            <Cell className={bulmaDocs.bdIconSize}>
                                <Icon><MaIcon bSize={MaIconSize.is18px} name="bell"/></Icon>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell>
                                <code>{iconSizeWrapper('bSize', 'MaIconSize.is24px')}</code>
                            </Cell>
                            <Cell>
                                <code>24px</code>
                            </Cell>
                            <Cell className={bulmaDocs.bdIconSize}>
                                <Icon><MaIcon bSize={MaIconSize.is24px} name="bell"/></Icon>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell rowSpan={4}>
                                <code>{iconSizeWrapper('bSize', 'Size.medium')}</code>
                            </Cell>
                            <Cell rowSpan={4}>
                                <code>2rem x 2rem</code>
                            </Cell>
                            <Cell>
                                {iconSizeWrapper('bSize', 'MaIconSize.is24px')}
                            </Cell>
                            <Cell>
                                <code>1em</code>
                            </Cell>
                            <Cell className={bulmaDocs.bdIconSize}>
                                <Icon bSize={Size.medium}><MaIcon bSize={MaIconSize.is24px} name="bell"/></Icon>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell>
                                <code>{iconSizeWrapper('bSize', 'MaIconSize.is18px')}</code>
                            </Cell>
                            <Cell>
                                <code>18px</code>
                            </Cell>
                            <Cell className={bulmaDocs.bdIconSize}>
                                <Icon bSize={Size.medium}><MaIcon bSize={MaIconSize.is18px} name="bell"/></Icon>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell>
                                <code>{iconSizeWrapper('bSize', 'MaIconSize.is24px')}</code>
                            </Cell>
                            <Cell>
                                <code>24px</code>
                            </Cell>
                            <Cell className={bulmaDocs.bdIconSize}>
                                <Icon bSize={Size.medium}><MaIcon bSize={MaIconSize.is24px} name="bell"/></Icon>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell>
                                <code>{iconSizeWrapper('bSize', 'MaIconSize.is36px')}</code>
                            </Cell>
                            <Cell>
                                <code>36px</code>
                            </Cell>
                            <Cell className={bulmaDocs.bdIconSize}>
                                <Icon bSize={Size.medium}><MaIcon bSize={MaIconSize.is36px} name="bell"/></Icon>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell rowSpan={5}>
                                <code>{iconSizeWrapper('bSize', 'Size.large')}</code>
                            </Cell>
                            <Cell rowSpan={5}>
                                <code>3rem x 3rem</code>
                            </Cell>
                            <Cell>
                                <code>mdi</code>
                            </Cell>
                            <Cell>
                                <code>1em</code>
                            </Cell>
                            <Cell className={bulmaDocs.bdIconSize}>
                                <Icon bSize={Size.large}><MaIcon name="bell"/></Icon>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell>
                                <code>{iconSizeWrapper('bSize', 'MaIconSize.is18px')}</code>
                            </Cell>
                            <Cell>
                                <code>18px</code>
                            </Cell>
                            <Cell className={bulmaDocs.bdIconSize}>
                                <Icon bSize={Size.large}><MaIcon bSize={MaIconSize.is18px} name="bell"/></Icon>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell>
                                <code>{iconSizeWrapper('bSize', 'MaIconSize.is24px')}</code>
                            </Cell>
                            <Cell>
                                <code>24px</code>
                            </Cell>
                            <Cell className={bulmaDocs.bdIconSize}>
                                <Icon bSize={Size.large}><MaIcon bSize={MaIconSize.is24px} name="bell"/></Icon>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell>
                                <code>{iconSizeWrapper('bSize', 'MaIconSize.is36px')}</code>
                            </Cell>
                            <Cell>
                                <code>36px</code>
                            </Cell>
                            <Cell className={bulmaDocs.bdIconSize}>
                                <Icon bSize={Size.large}><MaIcon bSize={MaIconSize.is36px} name="bell"/></Icon>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell>
                                <code>{iconSizeWrapper('bSize', 'MaIconSize.is48px')}</code>
                            </Cell>
                            <Cell>
                                <code>48px</code>
                            </Cell>
                            <Cell className={bulmaDocs.bdIconSize}>
                                <Icon bSize={Size.large}><MaIcon bSize={MaIconSize.is48px} name="bell"/></Icon>
                            </Cell>
                        </Row>
                        </TBody>
                    </Table>
                    <br/>
                </div>
                <div>
                    <p>
                        MDI also provides modifier classes for:
                    </p>
                    <ul style={{listStyleType: "circle"}}>
                        <li>
                            light and dark icons
                        </li>
                        <li>
                            rotated &amp; flipped icons
                        </li>
                    </ul>
                    <br/>
                    <Table isBordered>
                        <THead>
                        <Row>
                            <HCell>Type</HCell>
                            <HCell>Material Design Icon Component</HCell>
                            <HCell>Result</HCell>
                        </Row>
                        </THead>
                        <TBody>
                        <Row>
                            <Cell>
                                Light color
                            </Cell>
                            <Cell>
                                <code>{iconSizeWrapper("color", 'MaIconColor.light')}</code>
                            </Cell>
                            <Cell className="bd-icon-size">
                                <Icon bSize={Size.large}><MaIcon color={MaIconColor.light} name="signal-4g"/></Icon>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell>
                                Dark color
                            </Cell>
                            <Cell>
                                <code>{iconSizeWrapper("color", 'MaIconColor.dark')}</code>
                            </Cell>
                            <Cell className="bd-icon-size">
                                <Icon bSize={Size.large}><MaIcon color={MaIconColor.dark} name="signal-4g"/></Icon>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell>
                                Light inactive color
                            </Cell>
                            <Cell>
                                <code>{iconSizeWrapper("color", 'MaIconColor.light')} {iconSizeWrapper("inactive", true)}</code>
                            </Cell>
                            <Cell className="bd-icon-size">
                                <Icon bSize={Size.large}><MaIcon color={MaIconColor.light} name="signal-4g" inactive/></Icon>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell>
                                Dark inactive color
                            </Cell>
                            <Cell>
                                <code>{iconSizeWrapper("color", 'MaIconColor.dark')} {iconSizeWrapper("inactive", true)}</code>
                                <code>mdi mdi-dark mdi-inactive</code>
                            </Cell>
                            <Cell className="bd-icon-size">
                                <Icon bSize={Size.large}><MaIcon color={MaIconColor.dark} name="signal-4g" inactive/></Icon>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell>
                                Flipped
                            </Cell>
                            <Cell>
                                <code>{iconSizeWrapper("flip", 'MaIconFlip.horizontal')}</code>
                                <br/>
                                <code>{iconSizeWrapper("flip", 'MaIconFlip.vertical')}</code>
                            </Cell>
                            <Cell className="bd-icon-size">
                                <Icon bSize={Size.large}><MaIcon name="signal-4g" flip={MaIconFlip.horizontal}/></Icon>
                                <br/>
                                <Icon bSize={Size.large}><MaIcon name="signal-4g" flip={MaIconFlip.vertical}/></Icon>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell>
                                Rotated
                            </Cell>
                            <Cell>
                                <code>{iconSizeWrapper("rotate", 45)}</code>
                                <br/>
                                <code>{iconSizeWrapper("rotate", 90)}</code>
                                <br/>
                                <code>{iconSizeWrapper("rotate", 180)}</code>
                            </Cell>
                            <Cell className="bd-icon-size">
                                <Icon bSize={Size.large}><MaIcon name="signal-4g" rotate={45}/></Icon>
                                <br/>
                                <Icon bSize={Size.large}><MaIcon name="signal-4g" rotate={90}/></Icon>
                                <br/>
                                <Icon bSize={Size.large}><MaIcon name="signal-4g" rotate={180}/></Icon>
                            </Cell>
                        </Row>
                        </TBody>
                    </Table>
                </div>
                <br/>
                <p> For more information
                    <a href="https://bulma.io/documentation/elements/icon/">
                        https://bulma.io/documentation/
                        <wbr/>elements/
                        <wbr/>icon/
                    </a>
                </p>
            </div>
        );
    }

    private static createComponent(code: string) {
        const result = transformer.execute(code);
        const Component: any = result.Component;
        return <Component/>;
    }
}
