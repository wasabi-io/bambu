import * as React from "react";
import Stateless from "component/Stateless";
import pageStyle from "css/pageStyle";
import {Content} from "bambu/lib/elements/content";
import {Color} from "bambu";
import Message from "bambu/lib/components/message/Message";
import {MessageBody, MessageHeader} from "bambu/lib/components/message";
import {Title} from "bambu/lib/elements/title";
import XDocEditor from "../../../view/editor/XDocEditor";

const codes = {
    basic: require("!raw-loader?./code/1-basic"),
    image: require("!raw-loader?./code/2-image"),
    modalCard: require("!raw-loader?./code/3-modalCard")
};

export default class Index extends Stateless <any> {
    public render() {
        return (
            <div className={pageStyle.bdContent}>
                <div className={pageStyle.content}>
                    <XDocEditor vertical={true} codes={[codes.basic]}>
                        <p>The <strong>&lt;Modal /&gt;</strong> structure is very simple:</p>
                        <ul>
                            <li>
                                <code>&lt;Modal /&gt;</code>: the main container
                                <ul>
                                    <li>
                                        <code>&lt;ModalContent /&gt;</code>: a horizontally and vertically centered container, with a maximum width of 640px, in which you can include <em>any</em> content
                                    </li>
                                    <li>
                                        <code>&lt;ModalClose /&gt;</code>: a simple cross located in the top right corner of the relative parent container.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </XDocEditor>
                    <Content>
                        <p>To <strong>activate</strong> the modal, just add the <code>is-active</code> modifier on the <code>.modal</code> container</p>
                    </Content>
                    <Message color={Color.danger}>
                        <MessageHeader>
                            <p>No JavaScript</p>
                        </MessageHeader>
                        <MessageBody>
                            Bambu give <strong>delegate</strong> methods to toggle <strong>&lt;Modal /&gt;</strong> component . You will have to implement toggle yourself.
                        </MessageBody>
                    </Message>
                    <hr/>
                    <XDocEditor vertical={true} codes={[codes.image]}>
                        <Title>Image modal</Title>
                        <Content>
                            <p>Because a modal can contain <strong>anything you want</strong>, you can very simply use it to build an image gallery for example:</p>
                        </Content>
                    </XDocEditor>
                    <hr/>
                    <XDocEditor vertical={true} codes={[codes.modalCard]}>
                        <Title>Modal Card</Title>
                        <Content>
                            <p>If you want a more classic modal, with a <strong>head</strong>, a <strong>body</strong> and a <strong>foot</strong>, use the <code>modal-card</code>.</p>
                        </Content>
                        <p>The <strong>&lt;ModalCard /&gt;</strong> structure is very simple:</p>
                        <ul>
                            <li>
                                <code>&lt;ModalCard /&gt;</code>: the main container
                                <ul>
                                    <li>
                                        <code>&lt;ModalCardHeader /&gt;</code>
                                    </li>
                                    <li>
                                        <code>&lt;ModalCardTitle /&gt;</code>
                                    </li>
                                    <li>
                                        <code>&lt;ModalCardBody /&gt;</code>
                                    </li>
                                    <li>
                                        <code>&lt;ModalCardFooter /&gt;</code>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </XDocEditor>
                </div>
            </div>
        );
    }
}
