import * as React from "react";
import Stateless from "component/Stateless";
import {Content} from "bambu/lib/elements/content";

export default class Helpers extends Stateless <any> {
    public render() {
        return (
            <div>
                <Content>
                    <br/>
                    to learn more about helpers
                    &nbsp;
                    <wbr/>
                    <a target="_blank" href="https://bulma.io/documentation/modifiers/helpers/">
                        https://bulma.io/documentation/
                        <wbr/>modifiers/
                        <wbr/>helpers
                    </a>
                </Content>
            </div>
        );
    }
}
