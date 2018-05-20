import * as classNames from 'classnames';
import * as React from 'react';
import {Hero, HeroBody} from "bambu/lib/layout/hero/index";
import {Container} from "bambu/lib/elements/container/index";
import {Stateless} from "wasabi-ui";
import bulmaDocs from "../../css/bulmaDocs";
import bulma from "bambu/lib/base/css/bulma";
import {Icon} from "bambu/lib/elements/icon";
import {IconSize} from "../../../lib/elements/icon";


export default class DashBoard extends Stateless<{}> {

    public render() {
        return (
            <Hero className={bulmaDocs.intro} isMedium>
                <HeroBody>
                    <Container>
                        <div className={bulmaDocs.introColumns}>
                            <div className={classNames(bulmaDocs.introColumn, bulmaDocs.isContent)}>
                                <div className={bulmaDocs.introContent}>
                                    <h1 className="title intro-title">
                                        <strong>Bambu</strong> is an open source Javascript framework that provide base components for <strong>react-web applications</strong> built with <strong>typescript</strong> on top of bulma css framework.
                                    </h1>
                                </div>
                            </div>
                            <div className={classNames(bulmaDocs.introColumn, bulmaDocs.isContent)}>
                                <div className={bulmaDocs.introContent}>
                                    <h1 className="title intro-title">
                                        <img src="./assets/combine.png"/>
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className={bulmaDocs.bdFocus}>
                            <nav className={bulma.columns}>
                                <a className={classNames(bulmaDocs.bdFocusItem, bulma.column, bulma.hasTextCentered)} href="#">
                                    <p className={classNames(bulma.title, bulma.is4)}>
                                        <strong>100% Responsive</strong>
                                    </p>
                                    <p className={classNames(bulma.subtitle, bulma.is6)}>Designed for <strong>mobile</strong> first</p>
                                    <figure className="bd-focus-icon">
                                        <span className="bd-focus-mobile icon is-large">
                                            <Icon icon="mobile-alt" bSize={IconSize.lg}/>
                                        </span>
                                        <span className="bd-focus-tablet icon is-large">
                                             <Icon icon="tablet-alt" bSize={IconSize.x2}/>
                                        </span>
                                        <span className="bd-focus-desktop icon is-large">
                                             <Icon icon="desktop" bSize={IconSize.x3}/>
                                        </span>
                                    </figure>
                                </a>

                                <a className="bd-focus-item column has-text-centered" href="https://reactjs.org/docs/react-component.html" target="_blank">
                                    <p className="title is-4">
                                        <strong>Component Based</strong>
                                    </p>
                                    <p className="subtitle is-6">
                                        Just import what you <strong>need</strong>
                                    </p>
                                    <figure className="bd-focus-cubes bd-focus-icon">
                                        <span className="bd-focus-cube bd-focus-cube-1 icon is-large">
                                             <Icon icon="cube" bSize={IconSize.x2}/>
                                        </span>
                                        <span className="bd-focus-cube bd-focus-cube-2 icon is-large">
                                           <Icon icon="cube" bSize={IconSize.x2}/>
                                        </span>
                                        <span className="bd-focus-cube bd-focus-cube-3 icon is-large">
                                          <Icon icon="cube" bSize={IconSize.x2}/>
                                        </span>
                                    </figure>
                                </a>

                                <a className="bd-focus-item column has-text-centered" href="https://www.w3.org/TR/css-flexbox-1/#intro" target="_blank">
                                    <p className="title is-4">
                                        <strong>Modern</strong>
                                    </p>
                                    <p className="subtitle is-6">
                                        Built with <strong>FlexBox</strong>
                                    </p>
                                    <figure className="bd-focus-icon">
                                        <span className="bd-focus-css3 icon is-large">
                                             <Icon icon="css3" bSize={IconSize.x3}/>
                                        </span>
                                    </figure>
                                </a>

                                <a className="bd-focus-item column has-text-centered" href="https://github.com/wasabi-io/bambu" target="_blank">
                                    <p className="title is-4">
                                        <strong>Free</strong>
                                    </p>
                                    <p className="subtitle is-6">
                                        Open source on <strong>GitHub</strong>
                                    </p>
                                    <figure className="bd-focus-icon">
                                        <span className="bd-focus-github icon is-large">
                                             <Icon icon="github-alt" bSize={IconSize.x3}/>
                                        </span>
                                    </figure>
                                </a>
                            </nav>
                        </div>
                    </Container>
                </HeroBody>
            </Hero>
        );
    }
}
