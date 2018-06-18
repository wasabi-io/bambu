import * as React from "react";
import Stateless from "component/Stateless";
import {Content} from "bambu/lib/elements/content";
import MessageView from "component/layout/message/MessageView";
import {Color} from "bambu";

export default class Form extends Stateless <any> {
    public render() {
        return (
            <div>
                <Content>
                    <br/>
                    <MessageView color={Color.info}>
                        Comming Soon
                    </MessageView>
                </Content>
            </div>
        );
    }
}
