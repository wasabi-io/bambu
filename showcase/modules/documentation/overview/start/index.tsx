import * as classNames from "classnames";
import * as React from "react";
import {Stateless} from "wasabi-ui";
import {bulma, Color} from "bambu";
import Highlight from "component/code/highlight/Highlight";
import {Message, MessageBody} from "bambu/lib/components/message";
import {Content} from "bambu/lib/elements/content";
import {FaIcon, Icon} from "bambu/lib/elements/icon";
import pageStyle from "css/pageStyle";
import DocMediaHighlight from "../../../view/highlight/DocMediaHighlight";
import DocMessageHighlight from "../../../view/highlight/DocMessageHighlight";

const packageJson = require("../../../../../../package.json");

const webpackCssModuleText = `{
    test: /\.css$/,
    use: [
        "style-loader",
        {
            loader: 'css-loader',
            options: {
                modules: true
            }
        }
    ]
}`;

const fontAwesomeScript = '<script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>';

export default class Index extends Stateless <any> {
    public render() {
        return (
            <div>
                <div className="content">
                    <p>
                        <h2>Installation</h2>
                        There are required <strong>3</strong> steps to <strong>get started</strong> with <strong>bambu</strong>. You have to:
                    </p>
                    <ol>
                        <li>
                            use <strong>npm</strong> or <strong>yarn</strong> to install dependencies of the <strong>bambu</strong> package.
                            <ul>
                                <li><strong>bulma :</strong> ( version {packageJson.peerDependencies["bulma"]} )</li>
                                <li><strong>font-awesome :</strong> ( version {packageJson.peerDependencies["font-awesome"]} )</li>
                                <li><strong>react :</strong> ( version {packageJson.peerDependencies["react"]} )</li>
                                <li><strong>prop-types :</strong> ( version {packageJson.peerDependencies["prop-types"]} )</li>
                            </ul>
                        </li>
                        <li>
                            use <strong>npm</strong> or <strong>yarn</strong> to install the <strong>bambu</strong> package
                        </li>
                        <li>
                            provide reading <strong>css</strong> files as modules.
                            <div><strong>Note :</strong> <strong>bambu</strong> use <strong>bulma.css</strong> from under of node_modules.
                                <Highlight language="javascript">
                                    import bulma from "bulma/css/bulma.css"
                                </Highlight>
                            </div>
                        </li>
                    </ol>
                </div>

                <DocMediaHighlight
                    title="2"
                    contentTitle={<span>Use <strong>npm / yarn</strong>:</span>}
                    codes={[
                        'npm install bulma font-awesome react prop-types',
                        'yarn bulma font-awesome react prop-types'
                    ]}
                />

                <DocMediaHighlight
                    lang="bash"
                    title="1"
                    contentTitle={<span>Use <strong>npm / yarn</strong>:</span>}
                    codes={[
                        'npm install bambu',
                        'yarn bambu'
                    ]}
                />

                <DocMediaHighlight
                    lang="bash"
                    title="3"
                    contentTitle={<span>For <strong>webpack</strong>:</span>}
                    codes={[
                        'yarn add --dev style-loader css-modules-loader sass-loader',
                        webpackCssModuleText
                    ]}
                />
                <hr/>

                <DocMessageHighlight color={Color.info} header="Font Awesome icons" codes={[fontAwesomeScript]}>
                    <p>If you want to use icons with bambu, don't forget to add <a href="https://fontawesome.com">Font Awesome 5</a>:</p>
                </DocMessageHighlight>

                <hr className="hr" style={{
                    marginBottom: 0
                }}/>

                <h3 id="code-requirements" className={classNames(bulma.title, bulma.is4, bulma.isSpaced, pageStyle.bdAnchorTitle)}>
                    <span className="bd-anchor-name">
                        Code requirements
                    </span>
                    <a className="bd-anchor-link" href="#code-requirements">
                        #
                    </a>
                </h3>
                <Content>
                    <p>
                        For <strong>bambu</strong> to work correctly, you need to make your webpage <strong>responsive</strong>.
                    </p>
                </Content>

                <DocMediaHighlight
                    lang="html"
                    title="1"
                    contentTitle={<span>Use the <strong>HTML5 doctype</strong></span>}
                    codes={['<!DOCTYPE html>']}
                />

                <DocMediaHighlight
                    lang="html"
                    title="2"
                    contentTitle={<span>Add the responsive <strong>viewport</strong> meta tag</span>}
                    codes={['<meta name="viewport" content="width=device-width, initial-scale=1">']}
                />
                <hr/>
                <Message color={Color.success}>
                    <MessageBody>
                        Completed ! Now lets started.
                        <Icon className={bulma.hasTextWarning}>
                            <FaIcon name="thumbs-up"/>
                        </Icon>
                    </MessageBody>
                </Message>
            </div>
        );
    }
}
