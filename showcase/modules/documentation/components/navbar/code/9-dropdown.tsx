import * as React from "react";
import {Navbar, NavbarDivider, NavbarItem, NavbarLink} from "bambu/lib/components/navbar";
import NavbarDropdown from "bambu/lib/components/navbar/NavbarDropdown";

export default class Index extends React.Component <{}, {}> {
    public render() {
        return (
            <div>
                <Navbar aria-label="dropdown navigation">
                    <NavbarItem isActive hasDropdown>
                        <NavbarLink>Docs</NavbarLink>
                        <NavbarDropdown>
                            <NavbarItem href="#">Overview</NavbarItem>
                            <NavbarItem href="#">Elements</NavbarItem>
                            <NavbarItem href="#">Components</NavbarItem>
                            <NavbarDivider/>
                            <NavbarItem href="#">Version 0.7.1</NavbarItem>
                        </NavbarDropdown>
                    </NavbarItem>
                </Navbar>
            </div>
        );
    }
}
