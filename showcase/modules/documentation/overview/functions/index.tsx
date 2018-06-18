import * as React from "react";
import Stateless from "component/Stateless";
import {Content} from "bambu/lib/elements/content";

export default class Functions extends Stateless <any> {
    public render() {
        return (
            <div>
                <Content>
                    <br/>
                    to learn more about functions
                    &nbsp;
                    <wbr/>
                    <a target="_blank" href="https://bulma.io/documentation/overview/functions/">
                        https://bulma.io/documentation/
                        <wbr/>overview/
                        <wbr/>functions
                    </a>
                </Content>
            </div>
        );
    }
}
