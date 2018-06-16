import * as classNames from 'classnames';
import * as React from 'react';
import {Hero, HeroBody} from "bambu/lib/layout/hero/index";
import {Container} from "bambu/lib/elements/container/index";
import {Stateless} from "wasabi-ui";
import bulma from "bambu/lib/base/css/bulma";
import {FaIcon, FaIconSize, FaIconStyle, Icon} from "bambu/lib/elements/icon";
import {Size, Size6} from "bambu";
import {SubTitle, Title} from "bambu/lib/elements/title";
import pageStyle from "css/pageStyle";
import DocIcon from "../view/icon/DocIcon";

export default class DashBoard extends Stateless<{}> {

    public render() {
        return (
            <Hero className={pageStyle.intro} isMedium>
                <HeroBody>
                    <Container>
                        <div className={pageStyle.introColumns}>
                            <div className={classNames(pageStyle.introColumn, pageStyle.isContent)}>
                                <div className={pageStyle.introContent}>
                                    <h1 className="title intro-title">
                                        <strong>Bambu</strong> is an open source Javascript framework that provide base components for <strong>react-web applications</strong> built with <strong>typescript</strong> on top of bulma css framework.
                                    </h1>
                                </div>
                            </div>
                            <div className={classNames(pageStyle.introColumn, pageStyle.isContent)}>
                                <div className={pageStyle.introContent}>
                                    <h1 className="title intro-title">
                                        <img src="./assets/combine.png"/>
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className={pageStyle.bdFocus}>
                            <nav className={bulma.columns}>
                                <a className={classNames(pageStyle.bdFocusItem, bulma.column, bulma.hasTextCentered)} href="#">
                                    <Title bSize={Size6.is4}><strong>100% Responsive</strong></Title>
                                    <SubTitle bSize={Size6.is6}>Designed for <strong>mobile</strong> first</SubTitle>
                                    <figure className={pageStyle.bdFocusIcon}>
                                        <Icon bSize={Size.large} className={pageStyle.bdFocusMobile}>
                                            <FaIcon name="mobile-alt" bSize={FaIconSize.isLg}/>
                                        </Icon>
                                        <Icon bSize={Size.large} className={pageStyle.bdFocusTablet}>
                                            <FaIcon name="tablet-alt" bSize={FaIconSize.is2x}/>
                                        </Icon>
                                        <Icon bSize={Size.large} className={pageStyle.bdFocusDesktop}>
                                            <FaIcon name="desktop" bSize={FaIconSize.is3x}/>
                                        </Icon>
                                    </figure>
                                </a>

                                <a className={classNames(pageStyle.bdFocusItem, bulma.column, bulma.hasTextCentered)} href="https://reactjs.org/docs/react-component.html" target="_blank">
                                    <Title bSize={Size6.is4}>Component Based</Title>
                                    <SubTitle bSize={Size6.is6}>Just import what you <strong>need</strong></SubTitle>
                                    <figure className={classNames(pageStyle.bdFocusCubes, pageStyle.bdFocusIcon)}>
                                        <Icon bSize={Size.large} className={classNames(pageStyle.bdFocusCube, pageStyle.bdFocusCube1)}>
                                            <FaIcon name="cube" bSize={FaIconSize.is2x}/>
                                        </Icon>
                                        <Icon bSize={Size.large} className={classNames(pageStyle.bdFocusCube, pageStyle.bdFocusCube2)}>
                                            <FaIcon name="cube" bSize={FaIconSize.is2x}/>
                                        </Icon>
                                        <Icon bSize={Size.large} className={classNames(pageStyle.bdFocusCube, pageStyle.bdFocusCube3)}>
                                            <FaIcon name="cube" bSize={FaIconSize.is2x}/>
                                        </Icon>
                                    </figure>
                                </a>

                                <a className="bd-focus-item column has-text-centered" href="https://www.w3.org/TR/css-flexbox-1/#intro" target="_blank">
                                    <p className="title is-4">
                                        <strong>Modern</strong>
                                    </p>
                                    <p className="subtitle is-6">
                                        Built with <strong>FlexBox</strong>
                                    </p>
                                    <DocIcon
                                        name="css3"
                                        iconStyle={FaIconStyle.brands}
                                        className={pageStyle.bdFocusIcon}
                                        bSize={Size.large}
                                        iconClassName={pageStyle.bdFocusCss3}
                                        iconSize={FaIconSize.is3x}
                                    />
                                </a>

                                <a className="bd-focus-item column has-text-centered" href="https://github.com/wasabi-io/bambu" target="_blank">
                                    <p className="title is-4">
                                        <strong>Free</strong>
                                    </p>
                                    <p className="subtitle is-6">
                                        Open source on <strong>GitHub</strong>
                                    </p>
                                    <DocIcon
                                        name="github-alt"
                                        className={pageStyle.bdFocusIcon}
                                        bSize={Size.large}
                                        iconStyle={FaIconStyle.brands}
                                        iconClassName={pageStyle.bdFocusGithub}
                                        iconSize={FaIconSize.is3x}
                                    />
                                </a>
                            </nav>
                        </div>
                    </Container>
                </HeroBody>
            </Hero>
        );
    }
}
