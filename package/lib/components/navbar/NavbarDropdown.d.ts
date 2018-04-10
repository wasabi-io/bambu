/// <reference types="react" />
import * as React from 'react';
import { HTMLDivProps } from '../../base/html/HTML';
export interface NavbarDropdownProps extends HTMLDivProps {
    active?: boolean;
    boxed?: boolean;
    right?: boolean;
}
declare const NavbarDropdown: React.SFC<NavbarDropdownProps>;
export default NavbarDropdown;
