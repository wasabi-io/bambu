import * as React from "react";
import Stateless from "component/Stateless";
import {Content} from "bambu/lib/elements/content";

export default class Mixins extends Stateless <any> {
    public render() {
        return (
            <div>
                <Content>
                    <br/>
                    to learn more about mixins
                    &nbsp;
                    <wbr/>
                    <a target="_blank" href="https://bulma.io/documentation/overview/mixins/">
                        https://bulma.io/documentation/
                        <wbr/>overview/
                        <wbr/>mixins
                    </a>
                </Content>
            </div>
        );
    }
}
