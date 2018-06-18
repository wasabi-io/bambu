import * as React from "react";
import Stateless from "component/Stateless";
import Container from "bambu/lib/elements/container/Container";
import {Navbar, NavbarBrand, NavbarBurger, NavbarEnd, NavbarItem, NavbarItemLink, NavbarMenu, NavbarStart} from "bambu/lib/components/navbar/index";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import {FaIcon, FaIconStyle, Icon} from "bambu/lib/elements/icon/index";
import {bulma} from "bambu";

export interface NavBarProps {
    basePath: string;
}

@observer
export default class NavBar extends Stateless<NavBarProps> {
    @observable
    private isActive: boolean = false;

    public constructor(props: NavBarProps) {
        super(props);
    }

    public render() {
        return (
            <Navbar hasShadow>
                <Container>
                    <NavbarBrand>
                        <NavbarItemLink href="https://wasabi-io.github.io/bambu/">
                            <b style={{
                                color: "blue",
                                fontWeight: 900,
                                fontFamily: "Monaco"
                            }}>&lt;b@mbu&gt;</b>
                        </NavbarItemLink>
                        <NavbarItemLink href="https://github.com/wasabi-io/bambu" target="_blank" isHiddenDesktop>
                            <Icon><FaIcon iconStyle={FaIconStyle.brands} name="github-alt"/></Icon>
                        </NavbarItemLink>
                        <NavbarBurger onClick={this.onClick}/>
                    </NavbarBrand>
                    <NavbarMenu isActive={this.isActive}>
                        <NavbarStart>
                            <NavbarItem href={this.getUrl("#documentation")}>
                                <Icon className={bulma.hasTextPrimary}><FaIcon name="book"/></Icon>
                                <span>Showcase</span>
                            </NavbarItem>
                        </NavbarStart>
                        <NavbarEnd>
                            <NavbarItemLink href="https://github.com/wasabi-io/bambu" target="_blank" isHiddenMobile>
                                <Icon><FaIcon iconStyle={FaIconStyle.brands} name="github-alt"/></Icon>
                            </NavbarItemLink>
                        </NavbarEnd>
                        <div className={bulma.isClearfix}/>
                    </NavbarMenu>
                </Container>
            </Navbar>
        );
    }

    public getUrl(path: string) {
        return `${this.props.basePath}${path}`;
    }

    @action
    public onClick() {
        this.isActive = !this.isActive;
    }
}
