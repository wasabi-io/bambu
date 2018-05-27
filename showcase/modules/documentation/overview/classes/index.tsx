import * as React from "react";
import {Stateless} from "wasabi-ui";
import Highlight from "component/code/highlight/Highlight";
import {Content} from "bambu/lib/elements/content";

const codeText = require("!raw-loader?modules!modules/documentation/columns/basics/code/Code1");

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
                            <br/>
                            <ul style={{listStyleType: "disc"}}>
                                <li>
                                    <p>
                                        Use <strong>bulma css module</strong>
                                    </p>
                                    <br/>
                                    <Highlight language="javascript">
                                        import {`{bulma}`} from 'bambu';
                                    </Highlight>
                                    <br/>
                                    <Highlight language="bash">
                                        {codeText}
                                    </Highlight>
                                    <br/>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </Content>
                <Content>
                    <p>
                        Bulma is a <strong>CSS</strong> framework, meaning that the end result is simply a <strong>single</strong> <code>.css</code> file:
                    </p>
                    <br/>
                    <a href="https://github.com/jgthms/bulma/blob/master/css/bulma.css">
                        https://github.com/jgthms/bulma
                        <wbr/>/blob
                        <wbr/>/master
                        <wbr/>/css
                        <wbr/>/bulma.css
                    </a> to learn more about bulma classess <a href="https://bulma.io/documentation/overview/classes/">click</a>
                </Content>
            </div>
        );
    }
}
