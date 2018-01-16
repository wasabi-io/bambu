import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Vertical } from 'rebul/lib/base/css';
import { Navbar, NavbarBrand, NavbarItem } from 'rebul/lib/components/navbar';
import { Container } from 'rebul/lib/elements/container';
import { Icon, IconSize } from 'rebul/lib/elements/icon';
import { SubTitle, Title } from 'rebul/lib/elements/title';
import { Column, Columns } from 'rebul/lib/grid/column';
import { Hero, HeroBody, HeroFoot } from 'rebul/lib/layout/hero';
import Stateless from 'wasabi-ui/lib/Stateless';

import MainNavigation from './MainNavigation';
import locationStore, { LocationProps } from './stores/LocationStore';
import WorkspaceStyle from './WorkspaceStyle';

export interface WorkspaceProps {
    location?: LocationProps;
}

class Workspace extends Stateless<WorkspaceProps> {
    constructor(props: any) {
        super(props);
    }
    public render(): JSX.Element {
        return (
            <div>
                <Navbar isFixed={Vertical.top}>
                    <Container>
                        <NavbarBrand>
                            <NavbarItem href="/">
                                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                            </NavbarItem>
                            <NavbarItem href="https://github.com/wasabi-io/rebul" target="_blank">
                                <Icon icon="github" size={IconSize.lg} style={{ display: "inline" }} />
                            </NavbarItem>
                        </NavbarBrand>
                    </Container>
                </Navbar>

                <div className={WorkspaceStyle.mainContent}>
                    <Hero className={WorkspaceStyle.isLink}>
                        <HeroBody>
                            <Container>
                                <Columns isVcentered>
                                    <Column>
                                        <Title style={{ color: "white" }}>Documentation</Title>
                                        <SubTitle style={{ color: "white" }}>
                                            Everything you need to <strong style={{ color: "white" }}>create a website</strong> with Bulma
                                    </SubTitle>
                                    </Column>
                                </Columns>
                            </Container>
                        </HeroBody>
                        <HeroFoot>
                            <Container>
                                <MainNavigation />
                            </Container>
                        </HeroFoot>
                    </Hero>

                    <Container>
                        {this.props.children}
                    </Container>
                </div>
            </div >
        );
    }

    componentWillReceiveProps(nextProps: WorkspaceProps) {
        if (nextProps.location !== this.props.location) {
            this.configure(nextProps.location);
        }
    }

    componentWillMount() {
        this.configure(this.props.location);
    }

    private configure(location: LocationProps) {
        locationStore.setLocation(location);
    }
}
export default withRouter(Workspace);
