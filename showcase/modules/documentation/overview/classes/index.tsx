import * as React from "react";
import {Stateless} from "wasabi-ui";
import Highlight from "component/code/highlight/Highlight";
import {Content} from "bambu/lib/elements/content";

export default class Index extends Stateless <any> {
    public render() {
        return (
            <div>
                <Content>
                    <ol>
                        <li>
                            All components in <strong>bambu</strong> is composed from html element & bulma css classnames.
                            <br/>
                            <br/>
                        </li>
                        <li>
                            <strong>bambu</strong> keep <strong>bulma</strong> css file as module.
                            <br/>
                            <p>
                                Use <strong>bulma css module</strong>
                            </p>
                            <br/>
                            <Highlight language="javascript">
                                import {`{bulma}`} from 'bambu';
                            </Highlight>
                            <br/>
                        </li>
                    </ol>
                </Content>
                <Content>
                    <p>
                        Bulma is a <strong>CSS</strong> framework, meaning that the end result is simply a <strong>single</strong> <code>.css</code> file:
                    </p>
                    <br/>
                    to learn more about bulma classess <a href="https://bulma.io/documentation/overview/classes/">
                    <a href="https://bulma.io/documentation/overview/classes/">
                        https://bulma.io/documentation/
                        <wbr/>overview/
                        <wbr/>classes/
                        <wbr/>bulma.css
                    </a>
                </a>
                </Content>
            </div>
        );
    }
}
