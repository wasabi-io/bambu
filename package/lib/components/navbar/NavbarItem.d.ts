/// <reference types="react" />
import * as React from 'react';
import { HTMLAllAttributes } from '../../base/html/HTML';
export interface NavbarItemProps extends HTMLAllAttributes {
    isActive?: boolean;
    isHoverable?: boolean;
    hasDropdown?: boolean;
    tagName?: string;
}
declare const NavbarItem: React.SFC<NavbarItemProps>;
export default NavbarItem;
