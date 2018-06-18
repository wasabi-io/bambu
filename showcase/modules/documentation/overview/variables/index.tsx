import * as React from "react";
import Stateless from "component/Stateless";
import {Content} from "bambu/lib/elements/content";

export default class Variables extends Stateless <any> {
    public render() {
        return (
            <div>
                <Content>
                    <br/>
                    to learn more about variables
                    &nbsp;
                    <wbr/>
                    <a target="_blank" href="https://bulma.io/documentation/overview/variables/">
                        https://bulma.io/documentation/
                        <wbr/>overview/
                        <wbr/>variables
                    </a>
                </Content>
            </div>
        );
    }
}
