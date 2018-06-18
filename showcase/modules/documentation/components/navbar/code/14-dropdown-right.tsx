import * as React from "react";
import {Navbar, NavbarDivider, NavbarEnd, NavbarItem, NavbarLink, NavbarMenu, NavbarStart} from "bambu/lib/components/navbar";
import NavbarDropdown from "bambu/lib/components/navbar/NavbarDropdown";
import {Hero, HeroBody} from "bambu/lib/layout/hero";
import {Color} from "bambu";
import {SubTitle, Title} from "bambu/lib/elements/title";

export default class Index extends React.Component <{}, {}> {
    public render() {
        return (
            <div>
                <Navbar aria-label="dropdown navigation">
                    <NavbarMenu>
                        <NavbarStart>
                            <NavbarItem hasDropdown isActive>
                                <NavbarLink>Left</NavbarLink>
                                <NavbarDropdown>
                                    <NavbarItem href="#">Overview</NavbarItem>
                                    <NavbarItem href="#">Elements</NavbarItem>
                                    <NavbarItem href="#">Components</NavbarItem>
                                    <NavbarDivider/>
                                    <NavbarItem href="#">Version 0.7.1</NavbarItem>
                                </NavbarDropdown>
                            </NavbarItem>
                        </NavbarStart>
                        <NavbarEnd>
                            <NavbarItem hasDropdown isActive>
                                <NavbarLink>Right</NavbarLink>
                                <NavbarDropdown isRight>
                                    <NavbarItem href="#">Overview</NavbarItem>
                                    <NavbarItem href="#">Elements</NavbarItem>
                                    <NavbarItem href="#">Components</NavbarItem>
                                    <NavbarDivider/>
                                    <NavbarItem href="#">Version 0.7.1</NavbarItem>
                                </NavbarDropdown>
                            </NavbarItem>
                        </NavbarEnd>
                    </NavbarMenu>
                </Navbar>
                <Hero color={Color.primary}>
                    <HeroBody>
                        <Title>Documentation</Title>
                        <SubTitle>
                            Everything you need to <strong>create a website</strong> with Bambu
                        </SubTitle>
                    </HeroBody>
                </Hero>
            </div>
        );
    }
}
