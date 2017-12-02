import * as React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarBurger,
    NavbarDivider,
    NavbarDropdown,
    NavbarDropDownParent,
    NavbarEnd,
    NavbarItemLink,
    NavbarLink,
    NavbarMenu,
    NavbarStart,
    NavbarStyle
} from "rebul/lib/components/navbar";
import Container from "rebul/lib/elements/container/Container";
import Stateless from "wasabi-ui/lib/Stateless";

export default class Workspace extends Stateless<{}> {
    public render() {
        const menuId = `${this.id}-nav-menu`;
        return (
            <Navbar hasShadow>
                <Container>
                    <NavbarBrand>
                        <NavbarItemLink href="../">
                            <img src="http://bulma.io/images/bulma-logo.png"
                                 alt="Bulma: a modern CSS framework based on Flexbox"/>
                        </NavbarItemLink>
                        <NavbarBurger data-target={menuId} active />
                    </NavbarBrand>
                    <NavbarMenu id={menuId}>
                        <NavbarStart>
                        </NavbarStart>
                        <NavbarEnd>
                            <NavbarDropDownParent active>
                                <NavbarItemLink>
                                    Account
                                </NavbarItemLink>
                                <NavbarDropdown>
                                    <NavbarItemLink>
                                        Dashboard
                                    </NavbarItemLink>
                                    <NavbarItemLink>
                                        Profile
                                    </NavbarItemLink>
                                    <NavbarItemLink>
                                        Settings
                                    </NavbarItemLink>
                                    <NavbarDivider/>
                                    <NavbarItemLink>
                                        Logout
                                    </NavbarItemLink>
                                </NavbarDropdown>
                            </NavbarDropDownParent>
                        </NavbarEnd>
                    </NavbarMenu>
                </Container>
            </Navbar>
        );
    }
}
