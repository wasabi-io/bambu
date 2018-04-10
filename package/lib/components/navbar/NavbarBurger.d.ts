/// <reference types="react" />
import * as React from 'react';
import { Color } from '../../base/css';
import { HTMLAllAttributes } from '../../base/html/HTML';
export interface NavbarBurgerProps extends HTMLAllAttributes {
    isActive?: boolean;
    color?: string | Color;
    dataTarget?: string;
    tagName?: string;
}
declare const NavbarBurger: React.SFC<NavbarBurgerProps>;
export default NavbarBurger;
