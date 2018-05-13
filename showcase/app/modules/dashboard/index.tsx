import * as React from 'react';
import Stateless from "wasabi-ui/lib/Stateless";
import {Hero, HeroBody} from "bambu/lib/layout/hero";
import Container from "bambu/lib/elements/container/Container";

export default class Index extends Stateless<{}> {
    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <Hero className="is-medium intro">
                <HeroBody>
                    <Container>
                        <div className="intro-columns">
                            <div className="intro-column is-content">
                                <div className="intro-content">
                                    <h1 className="title intro-title">
                                        <strong>Bulma</strong> is an open source CSS framework based on <strong>Flexbox</strong> and used by more than <strong>100,000</strong> developers.
                                    </h1>

                                    <div id="ghbtns" className="intro-ghbtns">
                                        <iframe src="https://ghbtns.com/github-btn.html?user=jgthms&amp;repo=bulma&amp;type=star&amp;count=true&amp;size=large" frameBorder="0" scrolling="0" width="160px" height="30px"/>
                                        <a href="https://www.npmjs.com/package/bulma" target="_blank" rel="nofollow">
                                            <img src="https://img.shields.io/npm/dm/bulma.svg"/>
                                        </a>
                                    </div>

                                    <pre id="npm" className="intro-npm"><code>npm install bulma</code><code id="npmCopy" className="intro-npm-copy" data-clipboard-text="npm install bulma">copy</code></pre>

                                    <nav className="intro-buttons">
                                        <a className="button is-primary is-large" href="https://github.com/jgthms/bulma/releases/download/0.7.0/bulma-0.7.0.zip">
                                            <span>
                                                <strong>Download</strong>
                                                <small>v0.7.0</small>
                                            </span>
                                        </a>
                                        <a className="button is-light is-large" href="/documentation">
                                            <span>
                                                <span>View</span>
                                                <strong>docs</strong>
                                            </span>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </Container>
                </HeroBody>
            </Hero>
        );
    }
}
