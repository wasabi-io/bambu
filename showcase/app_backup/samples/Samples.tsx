import * as React from "react";
import { Menu, MenuLabel, MenuLink, MenuList } from "rebul/lib/components/menu";
import {Color, Responsive} from "rebul/lib/base/css";
import Container from "rebul/lib/elements/container/Container";
import Notification from "rebul/lib/elements/notification/Notification";
import {ColumnSize} from "rebul/lib/grid/column";
import Column from "rebul/lib/grid/column/Column";
import Columns from "rebul/lib/grid/column/Columns";
import Stateless from "wasabi-ui/lib/Stateless";
import ComponentsSample from "./components";
import ElementsSample from "./elements";
import GridSample from "./grid";
import GroupSample, {GroupSampleProps} from "./GroupSample";
import LayoutSample from "./layout";

let groups: GroupSampleProps[] = [];
groups = groups.concat(ComponentsSample);
groups = groups.concat(GridSample);
groups = groups.concat(LayoutSample);
groups = groups.concat(ElementsSample);

export default class Samples extends Stateless<{}> {

    public static renderGroups(grps: GroupSampleProps[]) {
        const element = [];
        for (const group of grps) {
            element.push(<GroupSample key={group.name} {...group} />);
        }
        return element;
    }

    public render(): JSX.Element {
        return (
            <Columns style={{ padding: "20px" }} responsive={Responsive.desktop}>
                <Column>
                    <Notification color={Color.light}>
                        <Menu>
                            <MenuLabel>
                                Showcase
                            </MenuLabel>
                            <MenuList>
                                <li>
                                    <MenuLink href="#components" active> Components </MenuLink>
                                    <ul>
                                        <li><MenuLink href="#components/menu" active> Menu </MenuLink></li>
                                    </ul>
                                </li>
                                <li>
                                    <MenuLink> Elements </MenuLink>
                                    <ul>
                                        <li><MenuLink> box </MenuLink></li>
                                        <li><MenuLink> button </MenuLink></li>
                                        <li><MenuLink> container </MenuLink></li>
                                        <li><MenuLink> content </MenuLink></li>
                                        <li><MenuLink> form </MenuLink></li>
                                        <li><MenuLink> icon </MenuLink></li>
                                        <li><MenuLink> image </MenuLink></li>
                                        <li><MenuLink> notification </MenuLink></li>
                                        <li><MenuLink> other </MenuLink></li>
                                        <li><MenuLink> progress </MenuLink></li>
                                        <li><MenuLink> table </MenuLink></li>
                                        <li><MenuLink> tag </MenuLink></li>
                                        <li><MenuLink> title </MenuLink></li>
                                    </ul>
                                </li>
                                <li>
                                    <MenuLink> Grid </MenuLink>
                                    <ul>
                                        <li><MenuLink > Column </MenuLink></li>
                                        <li><MenuLink> Tile </MenuLink></li>
                                    </ul>
                                </li>
                                <li>
                                    <MenuLink> Layout </MenuLink>
                                    <ul>
                                        <li><MenuLink> Footer </MenuLink></li>
                                        <li><MenuLink> Hero </MenuLink></li>
                                        <li><MenuLink> Section </MenuLink></li>
                                    </ul>
                                </li>
                            </MenuList>
                        </Menu>
                    </Notification>
                </Column>
                <Column size={ColumnSize.isTwoThirdsDesktop}>
                    <Container>
                        { Samples.renderGroups(groups)}
                    </Container>
                </Column>
            </Columns>
        );
    }

}
