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
import {IconEffect, IconFlip} from "bambu/lib/elements/icon/FaIcon";
import {Highlight} from "../../../../component/code/highlight";
import transformer from "../../../../component/code/transform/transformer";

const codes = {
    icon: require("!raw-loader?modules!./code/1-icon"),
    colors: require("!raw-loader?modules!./code/2-colors"),
    stack: require("!raw-loader?modules!./code/3-stack"),
    stack2: require("!raw-loader?modules!./code/3-stack2")
};

const iconSizeWrapper = (bSize?: string, fSize?: string) => {
    if (bSize) {
        return <code>{`bSize={${bSize}}`}</code>;
    }
    if (fSize) {
        return <code>{`iconSize={${fSize}}`}</code>;
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
                <hr />
                <p>For more information
                    <a href="https://bulma.io/documentation/elements/icon/">
                        https://bulma.io/documentation/elements/icon/
                    </a>
                </p>
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
                        <Cell>{iconSizeWrapper('Size.small', null)}</Cell>
                        <Cell><code>1rem x 1rem</code></Cell>
                        <Cell>{iconSizeWrapper()}</Cell>
                        <Cell><code>1em</code></Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon name="home" bSize={Size.small} iconClassName="fa-w18"/>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell rowSpan={2}>{iconSizeWrapper()}</Cell>
                        <Cell rowSpan={2}><code>1.5rem x 1.5rem</code></Cell>
                        <Cell>{iconSizeWrapper()}</Cell>
                        <Cell><code>1em</code></Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon name="home" bSize={Size.small} iconClassName="fa-w18"/>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>{iconSizeWrapper(null, 'IconSize.isLg')}</Cell>
                        <Cell><code>1.33em</code></Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon name="home" bSize={Size.small} iconClassName="fa-w18"/>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell rowSpan={3}>{iconSizeWrapper('Size.medium', null)}</Cell>
                        <Cell rowSpan={3}><code>2rem x 2rem</code></Cell>
                        <Cell>{iconSizeWrapper()}</Cell>
                        <Cell><code>1em</code></Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon name="home" bSize={Size.medium} iconClassName="fa-w18"/>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>{iconSizeWrapper(null, 'IconSize.isLg')}</Cell>
                        <Cell><code>1.33em</code></Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon name="home" bSize={Size.medium} iconClassName="fa-w18"/>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>{iconSizeWrapper(null, 'IconSize.is2x')}</Cell>
                        <Cell><code>2em</code></Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon name="home" bSize={Size.medium} iconClassName="fa-w18"/>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell rowSpan={4}>{iconSizeWrapper('Size.large')}</Cell>
                        <Cell rowSpan={4}><code>3rem x 3rem</code></Cell>
                        <Cell>{iconSizeWrapper()}</Cell>
                        <Cell><code>1em</code></Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon name="home" bSize={Size.large} iconClassName="fa-w18"/>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>{iconSizeWrapper('IconSize.isLg')}}</Cell>
                        <Cell><code>1.33em</code></Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon name="home" bSize={Size.large} iconClassName="fa-w18"/>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>{iconSizeWrapper(null, 'IconSize.is2x')}</Cell>
                        <Cell><code>2em</code></Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon name="home" bSize={Size.large} iconClassName="fa-w18"/>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell>{iconSizeWrapper(null, 'IconSize.is3x')}</Cell>
                        <Cell><code>3em</code></Cell>
                        <Cell className={bulmaDocs.bdIconSize}>
                            <Icon name="home" bSize={Size.large} iconClassName="fa-w18"/>
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
                <ul>
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
                            <Icon name="home" fixed/>
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
                            <Icon border name="home" iconClassName="fa-w18"/>
                        </Cell>
                    </Row>
                    <Row>
                        <Cell key={"cell1"}>
                            Animated
                        </Cell>
                        <Cell key={"cell2"}>
                            <code>spinner={braces(true)} pulse={braces(true)}</code>
                        </Cell>
                        <Cell  key={"cell3"} className={bulmaDocs.bdIconSize}>
                            <Icon effect={IconEffect.pulse} name="spinner" iconClassName="fa-spinner"/>
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
                            <Icon name="shield-alt"/><br/>
                            <Icon name="shield-alt" rotate={90}/><br/>
                            <Icon name="shield-alt" rotate={180}/><br/>
                            <Icon name="shield-alt" rotate={270}/><br/>
                            <Icon name="shield-alt" flip={IconFlip.horizontal}/><br/>
                            <Icon name="shield-alt" flip={IconFlip.vertical}/><br/>
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

    private static createComponent(code: string) {
        const result = transformer.execute(code);
        const Component: any = result.Component;
        return <Component />;
    }
}
