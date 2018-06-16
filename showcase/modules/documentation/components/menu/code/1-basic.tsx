import * as React from "react";
import {Menu, MenuLabel, MenuLink, MenuList} from "bambu/lib/components/menu";
import MenuListItem from "bambu/lib/components/menu/MenuListItem";

export default class Index extends React.Component <{}, {}> {
    public render() {
        return (
            <Menu>
                <MenuLabel>General</MenuLabel>
                <MenuList>
                    <MenuLink>Dashboard</MenuLink>
                    <MenuLink>Customers</MenuLink>
                </MenuList>
                <MenuLabel>Administration</MenuLabel>
                <MenuList>
                    <MenuLink>Team Settings</MenuLink>
                    <MenuListItem>
                        <MenuLink isActive>Manage Your Team</MenuLink>
                        <MenuList>
                            <MenuLink>Members</MenuLink>
                            <MenuLink>Plugins</MenuLink>
                            <MenuLink>Add a member</MenuLink>
                        </MenuList>
                    </MenuListItem>
                    <MenuLink>Invitations</MenuLink>
                    <MenuLink>Cloud Storage Environment Settings</MenuLink>
                    <MenuLink>Authentication</MenuLink>
                </MenuList>
                <MenuLabel>Transactions</MenuLabel>
                <MenuList>
                    <MenuLink>Payments</MenuLink>
                    <MenuLink>Transfers</MenuLink>
                    <MenuLink>Balance</MenuLink>
                </MenuList>
            </Menu>
        );
    }
}
