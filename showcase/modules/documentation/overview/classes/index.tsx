import * as React from "react";
import Stateless from "component/Stateless";
import Highlight from "component/code/highlight/Highlight";
import {Content} from "bambu/lib/elements/content";

export default class Classes extends Stateless <any> {
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
                            <strong>bambu</strong> use <strong>bulma</strong> css file as json classnames.
                            <br/>
                            <p>
                                Use <strong>bulma css json classnames</strong> as programtically.
                            </p>
                            <br/>
                            <Highlight language="javascript">
                                import {`{bulma}`} from 'bambu';
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                {`<div className={bulma.content}> This is content</div>`}
                            </Highlight>
                            <br/>
                        </li>
                        <li>
                            <strong>using</strong> bulma as css modules.
                            <br/>
                            <br/>
                            <p>
                                if you want to use `bulma.css` as css modules then classNames will generate.
                                You have to upgrade bulma classnames in <strong>bambu</strong>
                            </p>
                            <Highlight language="javascript">
                                import {`{bulma}`} from "bambu";
                                <br/>
                                <br/>
                                bulma.$putAll(require('bulma/css/bulma.css'));
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
                    <a target="_blank" href="https://bulma.io/documentation/overview/classes/">
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
