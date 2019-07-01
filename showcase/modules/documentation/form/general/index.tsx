import * as React from "react";
import Stateless from "component/Stateless";
import {Content} from "bambu/lib/elements/content";
import XDocEditor from "modules/view/editor/XDocEditor";
import bulma from "bambu/lib/base/css/bulma";
import {ColumnSize} from "bambu/lib/grid/column";
import MessageView from "../../../../component/layout/message/MessageView";
import {Color} from "bambu";

const codes = {
    basic: [require("!raw-loader?./code/1-basic")],
    field: [require("!raw-loader?./code/2-field")],
    fieldSpaces: [require("!raw-loader?./code/3-field-spaces")],
    elements: [
        require("!raw-loader?./code/4-input"),
        require("!raw-loader?./code/5-select"),
        require("!raw-loader?./code/6-submit")
    ],
    withIcons: [require("!raw-loader?./code/7-with-icons")],
    withIconsSelect: [require("!raw-loader?./code/8-with-icons-select")],
    withIconsSize: [
        require("!raw-loader?./code/9-with-icons-small"),
        require("!raw-loader?./code/10-with-icons-normal"),
        require("!raw-loader?./code/11-with-icons-medium"),
        require("!raw-loader?./code/12-with-icons-large")
    ],
    withAddons: [require("!raw-loader?./code/13-form-addons")],
    withAddonsStaticBotton: [require("!raw-loader?./code/14-form-addons-static-button")],
    withAddonsExpanded: [require("!raw-loader?./code/15-form-addons-expanded")],
    withAddonsAlign: [
        require("!raw-loader?./code/16-form-addons-centered"),
        require("!raw-loader?./code/17-form-addons-right"),
    ],
    fieldGroup: [require("!raw-loader?./code/18-form-group")],
    fieldGroupAlignment: [
        require("!raw-loader?./code/19-form-group-centered"),
        require("!raw-loader?./code/20-form-group-right")
    ],
    fieldGroupExpanded: [require("!raw-loader?./code/21-form-group-expanded")],
    fieldGroupMultiline: [require("!raw-loader?./code/22-form-group-multiline")],
    fieldHorizontal: [require("!raw-loader?./code/23-form-horizontal")],
    fieldHorizontalAndAlignment: [require("!raw-loader?./code/22-form-group-multiline")],
};

export default class General extends Stateless <any> {
    public render() {
        return (
            <div>
                <Content>
                    <p>The following form controls <strong>classes</strong> are supported:</p>
                    <ul>
                        <li><code>.label</code></li>
                        <li><code>.input</code></li>
                        <li><code>.textarea</code></li>
                        <li><code>.select</code></li>
                        <li><code>.checkbox</code></li>
                        <li><code>.radio</code></li>
                        <li><code>.button</code></li>
                        <li><code>.help</code></li>
                    </ul>
                    <p>
                        Each of them should be wrapped in a <code>.control</code> container.<br/>
                        When combining several controls in a <strong>form</strong>, use the <code>.field</code> class as a <strong>container</strong>, to keep the spacing consistent.
                    </p>
                </Content>
                <br/>
                <br/>
                <XDocEditor previewClassName={bulma[ColumnSize.isOneThird]} codes={codes.basic}/>
                <hr/>
                <br/>
                <br/>
                <XDocEditor title="Form field" codes={codes.field}>
                    <Content>
                        <p>The <code>field</code> container is a simple container for:</p>
                        <ul>
                            <li>a text <code>label</code></li>
                            <li>a form <code>control</code></li>
                            <li>an optional <code>help</code>text</li>
                        </ul>
                    </Content>
                </XDocEditor>
                <br/>
                <p>This container allows form fields to be <strong>spaced consistently</strong>.</p>
                <XDocEditor codes={codes.fieldSpaces}/>
                <hr/>
                <br/>
                <br/>
                <XDocEditor title="Form control" codes={codes.elements}>
                    <Content>
                        <p>The <code>field</code> container is a simple container for:</p>
                        <ul>
                            <li>a text <code>label</code></li>
                            <li>a form <code>control</code></li>
                            <li>an optional <code>help</code>text</li>
                        </ul>
                    </Content>
                </XDocEditor>
                <hr/>
                <br/>
                <br/>
                <XDocEditor title="With Icons" codes={codes.withIcons}>
                    <Content>
                        <p>You can append one of 2 <strong>modifiers</strong> on a control:</p>
                        <ul>
                            <li>
                                <code>has-icons-left</code>
                            </li>
                            <li>
                                and/or <code>has-icons-right</code>
                            </li>
                        </ul>
                        <p>You also need to add a modifier on the <strong>icon</strong>:</p>
                        <ul>
                            <li>
                                <code>icon is-left</code> if <code>has-icons-left</code> is used
                            </li>
                            <li>
                                <code>icon is-right</code> if <code>has-icons-right</code> is used
                            </li>
                        </ul>
                        <p>The size of the <strong>input</strong> will define the size of the icon container.</p>
                    </Content>
                </XDocEditor>
                <br/>
                <p>
                    You can append icons to <strong>select dropdowns</strong> as well.
                </p>
                <XDocEditor codes={codes.withIconsSelect}/>
                <br/>
                <p>
                    If the control contains an icon, Bulma will make sure the icon remains <strong>centered</strong>, no matter the size of the input <em>or</em> of the icon.
                </p>
                <XDocEditor codes={codes.withIconsSize}/>
                <hr/>
                <br/>
                <br/>
                <XDocEditor title="Form addons" codes={codes.withAddons}>
                    <Content>
                        <p>If you want to <strong>attach controls</strong> together, use the <code>has-addons</code> modifier on the <code>field</code> container:</p>
                    </Content>
                </XDocEditor>
                <br/>
                <p>You can attach inputs, buttons, and dropdowns <strong>only</strong>.</p>
                <br/>
                <XDocEditor codes={codes.withAddonsStaticBotton}>
                    <Content>
                        <p>It can be useful to append a <a href="https://bulma.io/documentation/elements/button#static-button">static button</a>.</p>
                    </Content>
                </XDocEditor>
                <br/>
                <br/>
                <XDocEditor codes={codes.withAddonsExpanded}>
                    <Content>
                        <p>Use the <code>is-expanded</code> modifier on the element you want to fill up the remaining space (in this case, the input):</p>
                    </Content>
                </XDocEditor>
                <br/>
                <br/>
                <XDocEditor codes={codes.withAddonsAlign}>
                    <Content>
                        <p>Use the <code>has-addons-centered</code> or the <code>has-addons-right</code> modifiers to alter the <strong>alignment</strong>.</p>
                    </Content>
                </XDocEditor>
                <hr/>
                <br/>
                <br/>
                <XDocEditor title="Form group" codes={codes.fieldGroup}>
                    <Content>
                        <p>
                            If you want to <strong>group</strong> controls together, use the <code>is-grouped</code> modifier on the <code>field</code> container.
                        </p>
                    </Content>
                </XDocEditor>
                <br/>
                <XDocEditor codes={codes.fieldGroupAlignment}>
                    <Content>
                        Use the <code>is-grouped-centered</code> or the <code>is-grouped-right</code> modifiers to alter the <strong>alignment</strong>.
                        <p></p>
                    </Content>
                </XDocEditor>
                <br/>
                <XDocEditor codes={codes.fieldGroupExpanded}>
                    <Content>
                        <p>
                            Add the <code>is-expanded</code> modifier on the control element you want to <strong>fill up the remaining space</strong> with.
                        </p>
                    </Content>
                </XDocEditor>
                <br/>
                <XDocEditor codes={codes.fieldGroupMultiline}>
                    <p>
                        Add the <code>is-grouped-multiline</code> modifier to allow controls to fill up <strong>multiple lines</strong>. This is ideal for a long list of controls.
                    </p>
                </XDocEditor>
                <br/>
                <br/>
                <MessageView color={Color.info} header="List of buttons">
                    <p>
                        If you only need a list of <em>buttons</em>, try out the new <code>buttons</code> class with which you can create a <a href="https://bulma.io/documentation/elements/button/#list-of-buttons">multiline list of buttons</a>.
                    </p>
                </MessageView>
                <hr/>
                <br/>
                <br/>
                <XDocEditor title="Horizontal form" codes={codes.fieldHorizontal}>
                    <Content>
                        <p>If you want a <strong>horizontal</strong> form control, use the <code>is-horizontal</code> modifier on the <code>field</code> container, in which you include:</p>
                        <ul>
                            <li>
                                <code>field-label</code> for the side label
                            </li>
                            <li>
                                <code>field-body</code> for the input/select/textarea container
                            </li>
                        </ul>
                        <p>You can use <code>is-grouped</code> or <code>has-addons</code> for the child elements.</p>
                    </Content>
                </XDocEditor>
                <br/>
                <br/>
                <XDocEditor codes={codes.fieldHorizontalAndAlignment}>
                    <Content>
                        <p>
                            To preserve the <strong>vertical alignment</strong> of labels with each type and size of control, the <code>.field-label</code> comes with <strong>4 size modifiers</strong>:
                        </p>
                        <ul>
                            <li>
                                <code>.is-small</code>
                            </li>
                            <li>
                                <code>.is-normal</code> for any <code>.input</code> or <code>.button</code>
                            </li>
                            <li>
                                <code>.is-medium</code>
                            </li>
                            <li>
                                <code>.is-large</code>
                            </li>
                        </ul>
                    </Content>
                </XDocEditor>
                <hr/>
                <br/>
                <br/>
                <h3 id="variables" className="title is-4 is-spaced bd-anchor-title">
                      <span className="bd-anchor-name">
                        Variables
                      </span>
                    <a className="bd-anchor-link" href="#variables">
                        #
                    </a>
                </h3>
                <div className="content">
                    <p>
                        Form elements can be <strong>customized</strong> using the following generic variables. Simply set one or multiple of these variables <em>before</em> importing Bulma. <a href="https://bulma.io/documentation/overview/customize/">Learn how</a>.
                    </p>
                </div>
                <table className="table is-bordered">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Default value</th>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Default value</th>
                    </tr>
                    </tfoot>
                    <tbody>


                    <tr>
                        <td>
                            <code>$control-radius</code>
                        </td>
                        <td>
                            <code>$radius</code>
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <code>$control-radius-small</code>
                        </td>
                        <td>
                            <code>$radius-small</code>
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <code>$control-padding-vertical</code>
                        </td>
                        <td>
                            <code>calc(0.375em - 1px)</code>
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <code>$control-padding-horizontal</code>
                        </td>
                        <td>
                            <code>calc(0.625em - 1px)</code>
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <code>$label-color</code>
                        </td>
                        <td>
                            <code>$grey-darker</code>
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <code>$label-weight</code>
                        </td>
                        <td>
                            <code>$weight-bold</code>
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <code>$help-size</code>
                        </td>
                        <td>
                            <code>$size-small</code>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
