import * as React from "react";
import Stateless from "component/Stateless";
import {Content} from "bambu/lib/elements/content";

export default class Modifiers extends Stateless<{}> {
    public render() {
        return (
            <div>
                <Content>
                    <br/>
                    to learn more about modifiers
                    &nbsp;
                    <wbr/>
                    <a href="https://bulma.io/documentation/modifiers/">
                        https://bulma.io/documentation/
                        <wbr/>modifiers/
                    </a>
                </Content>
            </div>
        );
    }
}
