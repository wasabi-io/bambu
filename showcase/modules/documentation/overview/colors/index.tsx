import * as React from "react";
import Stateless from "component/Stateless";
import {Content} from "bambu/lib/elements/content";

export default class Colors extends Stateless <any> {
    public render() {
        return (
            <div>
                <Content>
                    <br/>
                    to learn more about colors
                    &nbsp;
                    <wbr/>
                    <a target="_blank" href="https://bulma.io/documentation/overview/colors/">
                        https://bulma.io/documentation/
                        <wbr/>overview/
                        <wbr/>colors
                    </a>
                </Content>
            </div>
        );
    }
}
