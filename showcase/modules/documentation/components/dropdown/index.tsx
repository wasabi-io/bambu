import * as React from "react";
import Stateless from "component/Stateless";
import pageStyle from "css/pageStyle";
import {Message, MessageBody} from "bambu/lib/components/message";
import {Color} from "bambu";
import XDocEditor from "../../../view/editor/XDocEditor";

const codes = {
    basic: require("!raw-loader?modules!./code/1-basic"),
    dropdownContent: require("!raw-loader?modules!./code/2-dropdownContent"),
    hoverable: require("!raw-loader?modules!./code/3-hoverable"),
    right: require("!raw-loader?modules!./code/4-right"),
    dropup: require("!raw-loader?modules!./code/5-dropup")
};

export default class Index extends Stateless <any> {
    public render() {
        return (
            <div className={pageStyle.bdContent}>
                <div className={pageStyle.content}>
                    <p>
                        The <code>&lt;Dropdown /&gt;</code> component is a container for a dropdown button and a dropdown menu.
                    </p>
                    <ul>
                        <li>
                            <code>&lt;Dropdown /&gt;</code> the <strong>main</strong> container
                            <ul>
                                <li>
                                    <code>&lt;DropdownTrigger /&gt;</code> the container for a <code>button</code>
                                </li>
                                <li>
                                    <code>&lt;DropdownMenu /&gt;</code> the toggable menu, <strong>hidden</strong> by default
                                    <ul>
                                        <li>
                                            <code>&lt;DropdownContent /&gt;</code> the dropdown <strong>box</strong>, with a white background and a shadow
                                            <ul>
                                                <li>
                                                    <code>&lt;DropdownItem /&gt;</code> each <strong>single item</strong> of the dropdown, which can either be a <code>a</code> or a <code>div</code>
                                                </li>
                                                <li>
                                                    <code>&lt;DropdownDivider /&gt;</code> a <strong>horizontal line</strong> to separate dropdown items
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <XDocEditor codes={[codes.basic]}/>
                    <br/>
                    <hr/>
                    <XDocEditor title="Dropdown content" codes={[codes.dropdownContent]}>
                        <p>
                            While the <code>&lt;DropdownItem /&gt;</code> can be used;
                            <ul>
                                <li>as an <strong>anchor link</strong> with <code>tagName="a"</code> property or when <code>href</code> property defined then it will be an anchor link as automatically.</li>
                                <li>as a <strong>div</strong> <code>tagName="div"</code> and insert almost <strong>any type of content</strong>.</li>
                            </ul>
                        </p>
                    </XDocEditor>
                    <br/>
                    <hr/>
                    <XDocEditor title="Hoverable or Toggable" codes={[codes.hoverable]}>
                        <p>
                            The <code>dropdown</code> component has <strong>2 additional modifiers</strong>
                        </p>
                        <ul>
                            <li>
                                <code>is-hoverable</code>: the dropdown will show up when <strong>hovering</strong> the <code>dropdown-trigger</code>
                            </li>
                            <li>
                                <code>is-active</code>: the dropdown will show up <strong>all the time</strong>
                            </li>
                        </ul>
                        <Message color={Color.success}>
                            <MessageBody>
                                While the CSS <code>:hover</code> implementation works perfectly, the <code>is-active</code> class is available for users who want to control the display of the dropdown with <strong>JavaScript</strong>.
                            </MessageBody>
                        </Message>
                    </XDocEditor>
                    <br/>
                    <hr/>
                    <XDocEditor title="Hoverable or Toggable" codes={[codes.right]}>
                        <p>
                            The <code>dropdown</code> component has <strong>2 additional modifiers</strong>
                        </p>
                        <ul>
                            <li>
                                <code>is-hoverable</code>: the dropdown will show up when <strong>hovering</strong> the <code>dropdown-trigger</code>
                            </li>
                            <li>
                                <code>is-active</code>: the dropdown will show up <strong>all the time</strong>
                            </li>
                        </ul>
                        <Message color={Color.success}>
                            <MessageBody>
                                While the CSS <code>:hover</code> implementation works perfectly, the <code>is-active</code> class is available for users who want to control the display of the dropdown with <strong>JavaScript</strong>.
                            </MessageBody>
                        </Message>
                    </XDocEditor>
                    <br/>
                    <hr/>
                    <XDocEditor title="Dropup" codes={[codes.dropup]}>
                        <p>
                            You can add the <code>is-up</code> modifier to have a dropdown menu that appears above the dropdown button.
                        </p>
                    </XDocEditor>
                </div>
            </div>
        );
    }
}
