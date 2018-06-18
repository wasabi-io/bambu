import * as React from "react";
import {Navbar, NavbarBrand, NavbarBurger, NavbarItem} from "bambu/lib/components/navbar";

export default class Index extends React.Component <{}, {}> {

    public render() {
        return (
            <Navbar>
                <NavbarBrand>
                    <NavbarItem href="https://bulma.io">
                        <img
                            src="https://bulma.io/images/bulma-logo.png"
                            alt="Bulma: a modern CSS framework based on Flexbox"
                            width="112"
                            height="28"
                        />
                    </NavbarItem>
                    <NavbarBurger/>
                </NavbarBrand>
            </Navbar>
        );
    }
}
