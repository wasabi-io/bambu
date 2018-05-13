import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';
import {Responsive, Color, Size} from 'bambu/lib/base/css';
import {Icon as BaseIcon, IconSize} from 'bambu/lib/elements/icon';
import {Tag} from 'bambu/lib/elements/tag';
import {Message, MessageBody} from 'bambu/lib/components/message';

import Page from '../Page';
import Snippet from '../../components/snippet';

export default class Icon extends Stateless<{}> {
    public render(): JSX.Element {
        const subTitle = (
            <h2>
                Bulma is compatible with <strong>all icon font libraries</strong>: <a href="https://fontawesome.com/">Font Awesome 5</a>, <a href="http://fontawesome.io/">Font Awesome 4</a>, <a href="https://materialdesignicons.com">Material Design
                Icons</a>, <a href="https://useiconic.com/open">Open Iconic</a>, <a href="http://ionicons.com/">Ionicons</a> etc.
            </h2>);

        return (
            <Page
                title="Icon"
                subTitle={subTitle}
                hasMeta
                variables
                sizes
                colors
            >
                <p>
                    The <code>Icon</code> element is a <strong>container</strong>
                    for any type of <strong>icon font</strong>. Because the icons can
                    take a few seconds to load, and because you want control over the
                    <strong>space</strong> the icons will take, you can use the <code>icon</code>
                    class as a reliable square container that will prevent the page to "jump" on page load.
                </p>
                <Snippet>
                    <Tag color={Color.warning}>
                        <BaseIcon icon="fas fa-home"/>
                    </Tag>
                </Snippet>
                <br/>
                <Message color={Color.info}>
                    <MessageBody>
                        The <strong>yellow background</strong> is only here for demonstration purposes, to highlight the icon container's area.
                    </MessageBody>
                </Message>
                <p>
                    By default, the <code>icon</code> container will take up
                    <em>exactly</em> <code>1.5rem x 1.5rem</code>. The icon itself
                    is sized accordingly to the icon library you're using. For example,
                    Font Awesome 5 icons will <strong>inherit</strong> the font size.
                </p>
                <hr/>
                <h3><b><a>#</a> Colors</b></h3>
                <p>
                    Since icon fonts are simply <strong>text</strong>, you can use the
                    <a href="modifiers/typography-helpers/#colors">text color modifiers</a>
                    to change the icon's color.
                </p>
                <Snippet>
                    <BaseIcon icon="fa-info-circle"/>
                    <BaseIcon icon="fa-check-circle"/>
                    <BaseIcon icon="fa-exclamation-circle"/>
                    <BaseIcon icon="fa-ban-circle"/>
                </Snippet>
                <hr/>
                <h3><b><a>#</a> Sizes</b></h3>
                <p>
                    The Bulma <code>icon</code> container comes in <strong>4 sizes</strong>.
                    It should always be <em>slightly bigger</em> than the icon it contains.
                    For example, Font Awesome 5 icons use a font-size of <code>1em</code> by default
                    (since it inherits the font size), but provides <a href="https://fontawesome.com/how-to-use/svg-with-js#additional-styling" target="_blank">additional sizes</a>.
                </p>
                <table>
                    <thead>
                    <tr>
                        <th>Container class</th>
                        <th>Container size</th>
                        <th>Font Awesome 5 class</th>
                        <th>Icon size</th>
                        <th>Result</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <code>icon is-small</code>
                        </td>
                        <td>
                            <code>1rem x 1rem</code>
                        </td>
                        <td>
                            <code>fas</code>
                        </td>
                        <td>
                            <code>1em</code>
                        </td>
                        <td>
                            <BaseIcon icon="fa-home" bSize={Size.small}/>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>
                            <code>icon</code>
                        </td>
                        <td rowSpan={2}>
                            <code>1.5rem x 1.5rem</code>
                        </td>
                        <td>
                            <code>fas</code>
                        </td>
                        <td>
                            <code>1em</code>
                        </td>
                        <td>
                            <BaseIcon icon="fa-home"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>fas fa-lg</code>
                        </td>
                        <td>
                            <code>1.33em</code>
                        </td>
                        <td>
                            <BaseIcon icon="fa-home fa-lg"/>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={3}>
                            <code>icon is-medium</code>
                        </td>
                        <td rowSpan={3}>
                            <code>2rem x 2rem</code>
                        </td>
                        <td>
                            <code>fas</code>
                        </td>
                        <td>
                            <code>1em</code>
                        </td>
                        <td>
                            <BaseIcon icon="fa-home" bSize={Size.medium}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>fas fa-lg</code>
                        </td>
                        <td>
                            <code>1.33em</code>
                        </td>
                        <td>
                            <BaseIcon icon="fa-home fa-lg" bSize={Size.medium}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>fas fa-2x</code>
                        </td>
                        <td>
                            <code>2em</code>
                        </td>
                        <td>
                            <BaseIcon icon="fa-home fa-2x" bSize={Size.medium}/>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={4}>
                            <code>icon is-large</code>
                        </td>
                        <td rowSpan={4}>
                            <code>3rem x 3rem</code>
                        </td>
                        <td>
                            <code>fas</code>
                        </td>
                        <td>
                            <code>1em</code>
                        </td>
                        <td>
                            <BaseIcon icon="fa-home" bSize={Size.large}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>fas fa-lg</code>
                        </td>
                        <td>
                            <code>1.33em</code>
                        </td>
                        <td>
                            <BaseIcon icon="fa-home fa-lg" bSize={Size.large}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>fas fa-2x</code>
                        </td>
                        <td>
                            <code>2em</code>
                        </td>
                        <td>
                            <BaseIcon icon="fa-home fa-2x" bSize={Size.large}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>fas fa-3x</code>
                        </td>
                        <td>
                            <code>3em</code>
                        </td>
                        <td>
                            <BaseIcon icon="fa-home fa-3x" bSize={Size.large}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Page>
        );
    }
}
