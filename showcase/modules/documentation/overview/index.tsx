import * as React from "react";
import Stateless from "component/Stateless";
import {Content} from "bambu/lib/elements/content";

export default class Overview extends Stateless<{}> {
    public render() {
        return (
            <div>
                <Content>
                    <br/>
                    to learn more about overview
                    &nbsp;
                    <wbr/>
                    <a target="_blank" href="https://bulma.io/documentation/overview/">
                        https://bulma.io/documentation/
                        <wbr/>overview/
                    </a>
                </Content>
            </div>
        );
    }
}
