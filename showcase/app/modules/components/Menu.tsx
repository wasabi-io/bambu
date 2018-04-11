import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';
import {
    Menu as BaseMenu,
    MenuLabel,
    MenuGen,
    MenuLink,
    MenuLinkGen,
    MenuLinkGenRoot,
    MenuList
} from 'bambu/lib/components/menu';

import Page from '../Page';
import Snippet from '../../components/snippet';

export default class Menu extends Stateless<{}> {
    public render(): JSX.Element {
        return (
            <Page
                title="Menu"
                subTitle="A simple menu, for any type of vertical navigation"
                hasMeta
                variables
            >
                <Snippet slices borderless scrolless>
                    <BaseMenu>
                        <MenuLabel> General </MenuLabel>
                        <MenuList>
                            <li><a>Dashboard</a></li>
                            <li><a>Customers</a></li>
                        </MenuList>
                        <MenuLabel>
                            Administration
                        </MenuLabel>
                        <MenuList>
                            <li><a>Team Settings</a></li>
                            <li>
                                <a className="isActive">Manage Your Team</a>
                                <ul>
                                    <li><a>Members</a></li>
                                    <li><a>Plugins</a></li>
                                    <li><a>Add a member</a></li>
                                </ul>
                            </li>
                            <li><a>Invitations</a></li>
                            <li><a>Cloud Storage Environment Settings</a></li>
                            <li><a>Authentication</a></li>
                        </MenuList>
                        <MenuLabel>
                            Transactions
                        </MenuLabel>
                        <MenuList>
                            <li><a>Payments</a></li>
                            <li><a>Transfers</a></li>
                            <li><a>Balance</a></li>
                        </MenuList>
                    </BaseMenu>
                </Snippet>
            </Page>
        );
    }
}
