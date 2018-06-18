import * as React from "react";
import Stateless from "component/Stateless";
import Content from "bambu/lib/elements/content/Content";

export default class Responsiveness extends Stateless <any> {
    public render() {
        return (
            <div>
                <Content>
                    <br/>
                    to learn more about responsiveness
                    &nbsp;
                    <wbr/>
                    <a target="_blank" href="https://bulma.io/documentation/overview/responsiveness/">
                        https://bulma.io/documentation/
                        <wbr/>overview/
                        <wbr/>responsiveness
                    </a>
                </Content>
            </div>
        );
    }
}
