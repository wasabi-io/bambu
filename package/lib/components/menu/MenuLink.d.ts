/// <reference types="react" />
import * as React from 'react';
import { HTMLAProps } from '../../base/html/HTML';
export interface MenuLinkProps extends HTMLAProps {
    active?: boolean;
    href?: string;
}
declare const MenuLink: React.SFC<MenuLinkProps>;
export default MenuLink;
