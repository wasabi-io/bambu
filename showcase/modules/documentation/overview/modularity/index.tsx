import * as React from "react";
import Stateless from "component/Stateless";
import {Content} from "bambu/lib/elements/content";

export default class Modularity extends Stateless <any> {
    public render() {
        return (
            <div>
                <Content>
                    <p>
                        Bulma consists of <strong>39</strong> <code>.sass</code> files that you can import <strong>individually.</strong>
                    </p>
                    <br/>
                    to learn more about modularity
                    &nbsp;
                    <wbr/>
                    <a target="_blank" href="https://bulma.io/documentation/overview/modularity/">
                        https://bulma.io/documentation/
                        <wbr/>overview/
                        <wbr/>modularity
                    </a>
                </Content>
            </div>
        );
    }
}
