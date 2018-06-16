import * as React from "react";
import {Stateless} from "wasabi-ui";
import {Content} from "bambu/lib/elements/content";
import SubTitle from "bambu/lib/elements/title/SubTitle";
import {Size6} from "bambu";
import DocMediaHighlight from "../../../view/highlight/DocMediaHighlight";

const codes = {
    sass: require("!raw-loader?modules!./code/1-sass.html")
};
export default class Index extends Stateless <any> {
    public render() {
        return (
            <div>
                <Content>
                    <p>If you're familiar with <a href="http://sass-lang.com/">Sass</a> and want to <strong>customize</strong> Bulma with your own colors and variables, just install Bulma via <strong>npm</strong>:</p>
                </Content>
                <DocMediaHighlight title="1" lang="bash" contentTitle={<span><strong>Download</strong> the source files:</span>} codes={['npm install bulma']}>
                    <Content>or clone the repository: <a href="https://github.com/jgthms/bulma">https://github.com/jgthms/bulma</a></Content>
                </DocMediaHighlight>
                <DocMediaHighlight title="2" lang="bash" contentTitle={<span><strong>Set</strong> your variables</span>} codes={['npm install bulma']}>
                    <Content>or clone the repository: <a href="https://github.com/jgthms/bulma">https://github.com/jgthms/bulma</a></Content>
                </DocMediaHighlight>
                <DocMediaHighlight title="2"
                                   lang="bash"
                                   contentTitle={<span><strong>Set</strong> your variables</span>}
                                   codes={[codes.sass]}>
                    <SubTitle key={"subtitle"} bSize={Size6.is6}>Create a file called <code>mystyles.scss</code> and add your own colors, set new fonts, override Bulma's default styles...</SubTitle>
                </DocMediaHighlight>
                <DocMediaHighlight title="3" lang="bash" contentTitle={<span>See the <strong>result</strong>: before and after</span>}>
                    <SubTitle key={"subtitle"} bSize={Size6.is6}>
                        As <code>$blue</code> has been updated, and since <code>$blue-invert</code> is automatically calculated with the <strong>function</strong> <code>$blue-invert: findColorInvert($blue)</code>, the <code>$blue-invert</code> is now black instead of white
                        <img width="640" height="640" src="https://bulma.io/images/customize-before.png" alt="Customizing Bulma with Sass"/>
                        <img width="640" height="640" src="https://bulma.io/images/customize-after.png" alt="Customizing Bulma with Sass"/>
                    </SubTitle>
                </DocMediaHighlight>
            </div>
        );
    }
}
