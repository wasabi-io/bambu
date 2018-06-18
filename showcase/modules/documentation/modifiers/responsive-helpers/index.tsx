import * as React from "react";
import Stateless from "component/Stateless";
import {Content} from "bambu/lib/elements/content";

export default class ResponsiveHelpers extends Stateless <any> {
    public render() {
        return (
            <div>
                <Content>
                    <br/>
                    to learn more about responsive-helpers
                    &nbsp;
                    <wbr/>
                    <a target="_blank" href="https://bulma.io/documentation/modifiers/responsive-helpers/">
                        https://bulma.io/documentation/
                        <wbr/>modifiers/
                        <wbr/>responsive-helpers
                    </a>
                </Content>
            </div>
        );
    }
}
