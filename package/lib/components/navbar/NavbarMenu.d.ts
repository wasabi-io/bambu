/// <reference types="react" />
import * as React from 'react';
import { HTMLDivProps } from '../../base/html/HTML';
export interface NavbarMenuProps extends HTMLDivProps {
    isActive?: boolean;
}
declare const NavbarMenu: React.SFC<NavbarMenuProps>;
export default NavbarMenu;
