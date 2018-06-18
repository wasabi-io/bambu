import * as React from "react";
import Stateless from "component/Stateless";
import {Content} from "bambu/lib/elements/content";

export default class ColorHelpers extends Stateless <any> {
    public render() {
        return (
            <div>
                <Content>
                    <br/>
                    to learn more about color-helpers
                    &nbsp;
                    <wbr/>
                    <a target="_blank" href="https://bulma.io/documentation/modifiers/color-helpers/">
                        https://bulma.io/documentation/
                        <wbr/>modifiers/
                        <wbr/>color-helpers
                    </a>
                </Content>
            </div>
        );
    }
}
