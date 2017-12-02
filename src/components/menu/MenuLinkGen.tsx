import * as React from "react";
import {getOrDefault, has} from "wasabi-common";
import Collection from "wasabi-common/lib/collection/Collection";
import Arrays from "wasabi-common/lib/types/Arrays";
import Stateless from "wasabi-ui/lib/Stateless";
import MenuLink, {MenuLinkProps} from "./MenuLink";

export interface MenuLinkGenParent {
    href?: string;
    hierarchical?: boolean;
}

export interface MenuLinkGenProps extends MenuLinkProps, MenuLinkGenParent {
    name: string;
    routes?: MenuLinkGenProps[];
}

export default class MenuLinkGen extends Stateless<MenuLinkGenProps> {
    public static render(routes: MenuLinkGenProps[], parent?: MenuLinkGenParent) {
        if (!Arrays.has(routes)) {
            return null;
        }
        if (parent) {
            const elements: JSX.Element[] = [];
            for (const route of routes) {
                const hierarchical = getOrDefault(route.hierarchical, parent.hierarchical);
                const href = hierarchical ? parent.href + "" + route.href : route.href;
                elements.push(<MenuLinkGen {...route} hierarchical={hierarchical} href={href} />);
            }
            return elements;
        }
        return Collection.mapArray(routes, (link) => <MenuLinkGen {...link} />);
    }

    public render(): JSX.Element {
        const {name, hierarchical, routes, ...props} = this.props;

        return (
            <li>
                <MenuLink {...props}>
                    {name}
                </MenuLink>
                {MenuLinkGen.render(routes, this.props)}
            </li>
        );
    }
}
