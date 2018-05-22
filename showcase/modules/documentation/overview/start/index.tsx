import * as classNames from "classnames";
import * as React from "react";
import {Stateless} from "wasabi-ui";
import {Media, MediaContent, MediaLeft} from "bambu/lib/components/media";
import {bulma, Color, Size6} from "bambu";
import {Title} from "bambu/lib/elements/title";
import Highlight from "component/code/highlight/Highlight";
import {Message, MessageBody, MessageHeader} from "bambu/lib/components/message";
import bulmaDocs from "../../../../css/bulmaDocs";
import {Content} from "bambu/lib/elements/content";
import Icon from "bambu/lib/elements/icon/Icon";

const packageJson = require("../../../../../package.json");

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

                <Media className={bulma.isLarge}>
                    <MediaLeft>
                        <Title bSize={Size6.is5}>1</Title>
                    </MediaLeft>
                    <MediaContent>
                        <Title bSize={Size6.is5}>
                            Use <strong>npm / yarn</strong>:
                        </Title>
                        <Highlight language="bash">
                            npm install bulma font-awesome react prop-types
                        </Highlight>
                        <br/>
                        <Highlight language="bash">
                            yarn bulma font-awesome react prop-types
                        </Highlight>
                    </MediaContent>
                </Media>

                <Media className={bulma.isLarge}>
                    <MediaLeft>
                        <Title bSize={Size6.is5}>2</Title>
                    </MediaLeft>
                    <MediaContent>
                        <Title bSize={Size6.is5}>
                            Use <strong>npm / yarn</strong>:
                        </Title>
                        <Highlight language="bash">
                            npm install bambu
                        </Highlight>
                        <br/>
                        <Highlight language="bash">
                            yarn bambu
                        </Highlight>
                    </MediaContent>
                </Media>

                <Media className={bulma.isLarge}>
                    <MediaLeft>
                        <Title bSize={Size6.is5}>3</Title>
                    </MediaLeft>
                    <MediaContent>
                        <Title bSize={Size6.is5}>
                            For <strong>webpack</strong>:
                        </Title>
                        <Highlight language="bash">
                            yarn add --dev style-loader css-modules-loader sass-loader
                        </Highlight>
                        <br/>
                        <Highlight language="bash">
                            {webpackCssModuleText}
                        </Highlight>
                    </MediaContent>
                </Media>

                <hr/>

                <Message color={Color.info}>
                    <MessageHeader>
                        Font Awesome icons
                    </MessageHeader>
                    <MessageBody>
                        <p>If you want to use icons with bambu, don't forget to install <a href="https://fontawesome.com">Font Awesome 5</a>:</p>
                        <Highlight language="bash">
                            npm install font-awesome
                        </Highlight>
                    </MessageBody>
                </Message>

                <hr className="hr" style={{
                    marginBottom: 0
                }}/>

                <h3 id="code-requirements" className={classNames(bulma.title, bulma.is4, bulma.isSpaced, bulmaDocs.bdAnchorTitle)}>
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

                <Media className={bulma.isLarge}>
                    <MediaLeft>
                        <Title bSize={Size6.is5}>1</Title>
                    </MediaLeft>
                    <MediaContent>
                        <Title bSize={Size6.is5}>
                            Use the <strong>HTML5 doctype</strong>
                        </Title>
                        <Highlight language="html">
                            <span className="cp">&lt;!DOCTYPE html&gt;</span>
                        </Highlight>
                    </MediaContent>
                </Media>

                <Media className={bulma.isLarge}>
                    <MediaLeft>
                        <Title bSize={Size6.is5}>2</Title>
                    </MediaLeft>
                    <MediaContent>
                        <Title bSize={Size6.is5}>
                            Add the responsive <strong>viewport</strong> meta tag
                        </Title>
                        <Highlight language="html">
                            <span className="nt">&lt;meta</span> <span className="na">name=</span><span className="s">"viewport"</span> <span className="na">content=</span><span className="s">"width=device-width, initial-scale=1"</span><span className="nt">&gt;</span>
                        </Highlight>
                    </MediaContent>
                </Media>
                <hr />
                <Message color={Color.success}>
                    <MessageBody>
                        Completed ! Now lets started.
                        <span className={bulma.hasTextWarning}><Icon icon="thumbs-up" /></span>
                    </MessageBody>
                </Message>
            </div>
        );
    }
}
