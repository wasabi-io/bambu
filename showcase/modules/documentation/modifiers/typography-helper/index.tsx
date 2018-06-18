import * as React from "react";
import Stateless from "component/Stateless";
import {Content} from "bambu/lib/elements/content";

export default class TypographyHelper extends Stateless <any> {
    public render() {
        return (
            <div>
                <Content>
                    <br/>
                    to learn more about typography-helper
                    &nbsp;
                    <wbr/>
                    <a target="_blank" href="https://bulma.io/documentation/modifiers/typography-helper/">
                        https://bulma.io/documentation/
                        <wbr/>modifiers/
                        <wbr/>typography-helper
                    </a>
                </Content>
            </div>
        );
    }
}
