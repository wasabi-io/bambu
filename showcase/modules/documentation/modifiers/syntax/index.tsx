import * as React from "react";
import Stateless from "component/Stateless";
import {Content} from "bambu/lib/elements/content";

export default class Syntax extends Stateless <any> {
    public render() {
        return (
            <div>
                <Content>
                    <br/>
                    to learn more about syntax
                    &nbsp;
                    <wbr/>
                    <a target="_blank" href="https://bulma.io/documentation/modifiers/syntax/">
                        https://bulma.io/documentation/
                        <wbr/>modifiers/
                        <wbr/>syntax
                    </a>
                </Content>
            </div>
        );
    }
}
