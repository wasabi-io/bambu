import * as React from "react";
import Stateless from "wasabi-ui/lib/Stateless";
import {Menu, MenuLabel, MenuLink, MenuList} from "bambu/lib/components/menu";

export interface MenuViewHeaderItem {
    header: string;
    items?: MenuViewItem[];
}

export interface MenuViewItem extends MenuViewHeaderItem {
    isLeaf?: boolean;
}

export interface MenuViewProps {
    items: MenuViewHeaderItem[];
}

export default class MenuView extends Stateless<MenuViewProps> {
    public render() {
        return (
            <Menu>
                {MenuView.renderItems(this.props.items)}
            </Menu>
        );
    }

    public static renderItems(items: MenuViewHeaderItem[]) {
        const elements: (JSX.Element | JSX.Element[])[] = [];
        for (const item of items) {
            elements.push(
                <MenuLabel>{item.header}</MenuLabel>
            );
            elements.push(
                <MenuList>
                    {MenuView.renderItemList(item.items)}
                </MenuList>
            );
        }
        return elements;
    }

    public static renderItemList(items: MenuViewItem[]) {
        const elements: JSX.Element[] = [];
        for (const item of items) {
            if (item.items) {
                elements.push(
                    <MenuLink>
                        {item.header}
                        <MenuList>
                            {MenuView.renderItemList(item.items)}
                        </MenuList>
                    </MenuLink>
                );
            } else {
                elements.push(<MenuLink>{item.header}</MenuLink>);
            }
        }
        return elements;
    }
}
