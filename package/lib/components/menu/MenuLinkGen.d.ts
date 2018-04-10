/// <reference types="react" />
import Stateless from 'wasabi-ui/lib/Stateless';
import { MenuLinkProps } from './MenuLink';
export interface MenuLinkGenParent {
    href?: string;
    hierarchical?: boolean;
}
export interface MenuLinkGenProps extends MenuLinkProps, MenuLinkGenParent {
    name: string;
    routes?: MenuLinkGenProps[];
}
export default class MenuLinkGen extends Stateless<MenuLinkGenProps> {
    static render(routes: MenuLinkGenProps[], parent?: MenuLinkGenParent): JSX.Element[];
    render(): JSX.Element;
}
