import * as React from "react";
import Stateless from "wasabi-ui/lib/Stateless";
import Container from "bambu/lib/elements/container/Container";
import {Navbar, NavbarBrand, NavbarBurger, NavbarEnd, NavbarItemLink, NavbarMenu, NavbarStart} from "bambu/lib/components/navbar/index";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import {Icon} from "bambu/lib/elements/icon/index";
import {Vertical} from "bambu";

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
            <div style={{height: 52}}>
                <Navbar hasShadow isFixed={Vertical.top}>
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
                                 <span className="icon bd-has-text-rss">
                                  <Icon name="github-alt"/>
                              </span>
                            </NavbarItemLink>
                            <NavbarBurger onClick={this.onClick}/>
                        </NavbarBrand>
                        <NavbarMenu isActive={this.isActive}>
                            <NavbarStart>
                                <a className="navbar-item bd-navbar-item-documentation " href={this.getUrl("#documentation")}>
                                <span className="icon has-text-primary">
                                    <Icon name="book"/>
                                </span>
                                    <span>Showcase</span>
                                </a>
                                <a className="navbar-item bd-navbar-item-blog " href={this.getUrl("react-docs")}>
                              <span className="icon  has-text-warning">
                                  <Icon name="file-text"/>
                              </span>
                                    <span>React Docs</span>
                                </a>
                            </NavbarStart>
                            <NavbarEnd>
                                <NavbarItemLink href="https://github.com/wasabi-io/bambu" target="_blank" isHiddenMobile>
                                 <span className="icon bd-has-text-rss">
                                  <Icon name="github-alt"/>
                              </span>
                                </NavbarItemLink>
                            </NavbarEnd>
                        </NavbarMenu>
                    </Container>
                </Navbar>
            </div>
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
