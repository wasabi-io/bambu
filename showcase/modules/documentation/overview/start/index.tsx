import * as classNames from "classnames";
import * as React from "react";
import Stateless from "component/Stateless";
import {bulma, Color} from "bambu";
import {Message, MessageBody} from "bambu/lib/components/message";
import {Content} from "bambu/lib/elements/content";
import {FaIcon, Icon} from "bambu/lib/elements/icon";
import pageStyle from "css/pageStyle";
import DocMediaHighlight from "modules/view/highlight/DocMediaHighlight";
import DocMessageHighlight from "modules/view/highlight/DocMessageHighlight";
import BulletTree from "component/elements/BulletTree";
import bulletItems from "./bulletItems";

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

export default class GettingStarted extends Stateless <any> {
    public render() {
        return (
            <div>
                <div className="content">
                    <h2>Installation</h2>
                    There are required <strong>3</strong> steps to <strong>getting started</strong> with <strong>bambu</strong>. You have to:

                    <BulletTree items={bulletItems}/>
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
