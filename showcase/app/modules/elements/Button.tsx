import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';
import {Button as BaseButton} from 'rebul/lib/elements/button';
import {Icon, IconSize} from 'rebul/lib/elements/icon';
import {Notification} from 'rebul/lib/elements/notification';
import {Color, Size, State} from 'rebul/lib/base/css';

import Page from '../Page';
import Snippet from '../../components/snippet';

export default class Button extends Stateless<{}> {
    public render(): JSX.Element {
        return (
            <Page
                title="Button"
                subTitle="The classic Button, in different colors, sizes, and states"
                hasMeta
                sizes
                colors
                variables
            >
                <div>
                    <p>
                        The <strong>button</strong> is an essential element of any design. It's meant to look and behave as an <strong>interactive</strong> element of your page.
                    </p>
                </div>
                <Snippet>
                    <BaseButton>Button</BaseButton>
                </Snippet>
                <div>
                    <br/>
                    <p>
                        The <code>Button</code> component can be used on:
                    </p>
                    <ul>
                        <li>
                            <code>&lt;a&gt;</code> anchor links
                        </li>
                        <li>
                            <code>&lt;button&gt;</code> form buttons
                        </li>
                        <li>
                            <code>&lt;input type="submit"&gt;</code> submit inputs
                        </li>
                        <li>
                            <code>&lt;input type="reset"&gt;</code> reset inputs
                        </li>
                    </ul>
                </div>
                <Snippet>
                    <BaseButton tagName="a">Anchor</BaseButton>
                    <BaseButton>Button</BaseButton>
                    <BaseButton tagName="input" type="submit" value="Submit input"/>
                    <BaseButton tagName="input" type="reset" value="Reset input"/>
                </Snippet>
                <hr/>
                <h3><b><a>#</a> Colors</b></h3>
                <Snippet>
                    <BaseButton color={Color.white}>White</BaseButton>
                    <BaseButton color={Color.light}>Light</BaseButton>
                    <BaseButton color={Color.dark}>Dark</BaseButton>
                    <BaseButton color={Color.black}>Black</BaseButton>
                    <BaseButton color={Color.text}>Text</BaseButton>
                </Snippet>
                <Snippet>
                    <BaseButton color={Color.primary}>Primary</BaseButton>
                    <BaseButton color={Color.link}>Link</BaseButton>
                    <BaseButton color={Color.info}>Info</BaseButton>
                    <BaseButton color={Color.success}>Success</BaseButton>
                    <BaseButton color={Color.warning}>Warning</BaseButton>
                    <BaseButton color={Color.danger}>Danger</BaseButton>
                </Snippet>
                <hr/>
                <h3><b><a>#</a> Sizes</b></h3>
                <Snippet>
                    <BaseButton size={Size.small}>Small</BaseButton>
                    <BaseButton>Normal</BaseButton>
                    <BaseButton size={Size.medium}>Medium</BaseButton>
                    <BaseButton size={Size.large}>Large</BaseButton>
                </Snippet>
                <hr/>
                <h3><b><a>#</a> Styles</b></h3>
                <h4>Outlined</h4>
                <Snippet>
                    <BaseButton isOutlined>Primary</BaseButton>
                    <BaseButton isOutlined color={Color.primary}>Primary</BaseButton>
                    <BaseButton isOutlined color={Color.link}>Link</BaseButton>
                    <BaseButton isOutlined color={Color.info}>Info</BaseButton>
                    <BaseButton isOutlined color={Color.success}>Success</BaseButton>
                    <BaseButton isOutlined color={Color.warning}>Warning</BaseButton>
                    <BaseButton isOutlined color={Color.danger}>Danger</BaseButton>
                </Snippet>
                <br/>
                <h4>Inverted (the text color becomes the background color, and vice-versa)</h4>
                <Snippet slices borderless>
                    <Notification color={Color.primary}>
                        <BaseButton isInverted color={Color.primary}>Primary</BaseButton>
                        <BaseButton isInverted color={Color.link}>Link</BaseButton>
                        <BaseButton isInverted color={Color.info}>Info</BaseButton>
                        <BaseButton isInverted color={Color.success}>Success</BaseButton>
                        <BaseButton isInverted color={Color.danger}>Danger</BaseButton>
                    </Notification>
                </Snippet>
                <br/>
                <h4>Invert Outlined (the invert color becomes the text and border colors)</h4>
                <Snippet slices borderless>
                    <Notification color={Color.primary}>
                        <BaseButton isInverted isOutlined color={Color.primary}>Primary</BaseButton>
                        <BaseButton isInverted isOutlined color={Color.link}>Link</BaseButton>
                        <BaseButton isInverted isOutlined color={Color.info}>Info</BaseButton>
                        <BaseButton isInverted isOutlined color={Color.success}>Success</BaseButton>
                        <BaseButton isInverted isOutlined color={Color.danger}>Danger</BaseButton>
                    </Notification>
                </Snippet>
                <br/>
                <h4>Rounded buttons</h4>
                <Snippet slices borderless>
                    <BaseButton isRounded color={Color.primary}>Primary</BaseButton>
                    <BaseButton isRounded color={Color.link}>Link</BaseButton>
                    <BaseButton isRounded color={Color.info}>Info</BaseButton>
                    <BaseButton isRounded color={Color.success}>Success</BaseButton>
                    <BaseButton isRounded color={Color.warning}>Warning</BaseButton>
                    <BaseButton isRounded color={Color.danger}>Danger</BaseButton>
                </Snippet>
                <hr/>
                <h3><b><a>#</a> States</b></h3>
                <h4>Normal</h4>
                <Snippet>
                    <BaseButton>Normal</BaseButton>
                    <BaseButton color={Color.primary}>Normal</BaseButton>
                    <BaseButton color={Color.link}>Normal</BaseButton>
                    <BaseButton color={Color.info}>Normal</BaseButton>
                    <BaseButton color={Color.success}>Normal</BaseButton>
                    <BaseButton color={Color.warning}>Normal</BaseButton>
                    <BaseButton color={Color.danger}>Normal</BaseButton>
                </Snippet>
                <br/>
                <h4>Hover</h4>
                <Snippet>
                    <BaseButton state={State.hovered}>Normal</BaseButton>
                    <BaseButton state={State.hovered} color={Color.primary}>Normal</BaseButton>
                    <BaseButton state={State.hovered} color={Color.link}>Normal</BaseButton>
                    <BaseButton state={State.hovered} color={Color.info}>Normal</BaseButton>
                    <BaseButton state={State.hovered} color={Color.success}>Normal</BaseButton>
                    <BaseButton state={State.hovered} color={Color.warning}>Normal</BaseButton>
                    <BaseButton state={State.hovered} color={Color.danger}>Normal</BaseButton>
                </Snippet>
                <br/>
                <h4>Focus</h4>
                <Snippet>
                    <BaseButton state={State.focused}>Focus</BaseButton>
                    <BaseButton state={State.focused} color={Color.primary}>Focus</BaseButton>
                    <BaseButton state={State.focused} color={Color.link}>Focus</BaseButton>
                    <BaseButton state={State.focused} color={Color.info}>Focus</BaseButton>
                    <BaseButton state={State.focused} color={Color.success}>Focus</BaseButton>
                    <BaseButton state={State.focused} color={Color.warning}>Focus</BaseButton>
                    <BaseButton state={State.focused} color={Color.danger}>Focus</BaseButton>
                </Snippet>
                <br/>
                <h4>Active</h4>
                <Snippet>
                    <BaseButton state={State.active}>Active</BaseButton>
                    <BaseButton state={State.active} color={Color.primary}>Active</BaseButton>
                    <BaseButton state={State.active} color={Color.link}>Active</BaseButton>
                    <BaseButton state={State.active} color={Color.info}>Active</BaseButton>
                    <BaseButton state={State.active} color={Color.success}>Active</BaseButton>
                    <BaseButton state={State.active} color={Color.warning}>Active</BaseButton>
                    <BaseButton state={State.active} color={Color.danger}>Active</BaseButton>
                </Snippet>
                <br/>
                <h4>Loading</h4>
                <Snippet slices borderless>
                    <BaseButton state={State.loading}>Loading</BaseButton>
                    <BaseButton state={State.loading} color={Color.primary}>Loading</BaseButton>
                    <BaseButton state={State.loading} color={Color.link}>Loading</BaseButton>
                    <BaseButton state={State.loading} color={Color.info}>Loading</BaseButton>
                    <BaseButton state={State.loading} color={Color.success}>Loading</BaseButton>
                    <BaseButton state={State.loading} color={Color.warning}>Loading</BaseButton>
                    <BaseButton state={State.loading} color={Color.danger}>Loading</BaseButton>
                </Snippet>
                <br/>
                <h4>Static</h4>
                <Snippet slices borderless>
                    <BaseButton state={State.static}>Static</BaseButton>
                </Snippet>
                <br/>
                <h4>Disabled</h4>
                <Snippet slices borderless>
                    <BaseButton disabled title="Disabled button">Disabled</BaseButton>
                    <BaseButton disabled color={Color.primary} title="Disabled button">Disabled</BaseButton>
                    <BaseButton disabled color={Color.link} title="Disabled button">Disabled</BaseButton>
                    <BaseButton disabled color={Color.info} title="Disabled button">Disabled</BaseButton>
                    <BaseButton disabled color={Color.success} title="Disabled button">Disabled</BaseButton>
                    <BaseButton disabled color={Color.warning} title="Disabled button">Disabled</BaseButton>
                    <BaseButton disabled color={Color.danger} title="Disabled button">Disabled</BaseButton>
                </Snippet>
                <br/>
                <h4>With Font Awesome icons</h4>
                <Snippet>
                    <BaseButton><Icon size={Size.small} icon="fa-bold"/></BaseButton>
                    <BaseButton><Icon size={Size.small} icon="fa-italic"/></BaseButton>
                    <BaseButton><Icon size={Size.small} icon="fa-underline"/></BaseButton>
                    <BaseButton><Icon size={Size.small} icon="fa-github"/>Github</BaseButton>
                    <BaseButton color={Color.primary}><Icon size={Size.small} icon="fa-twitter"/>Twitter</BaseButton>
                    <BaseButton color={Color.success}><Icon size={Size.small} icon="fa-check"/>Save</BaseButton>
                    <BaseButton isOutlined color={Color.danger}>Delete<Icon size={Size.small} icon="fa-times"/></BaseButton>
                    <BaseButton size={Size.small}><Icon icon="fa-github"/>Github</BaseButton>
                    <BaseButton><Icon icon="fa-github"/>Github</BaseButton>
                    <BaseButton size={Size.medium}><Icon size={Size.small} icon="fa-github"/>Github</BaseButton>
                    <BaseButton size={Size.large}><Icon size={Size.small} icon="fa-github"/>Github</BaseButton>
                </Snippet>
            </Page>
        );
    }
}
