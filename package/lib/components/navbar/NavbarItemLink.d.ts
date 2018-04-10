/// <reference types="react" />
import * as React from 'react';
import { HTMLAllAttributes } from '../../base/html/HTML';
export interface NavbarItemLinkProps extends HTMLAllAttributes {
    isActive?: boolean;
}
declare const NavbarItemLink: React.SFC<NavbarItemLinkProps>;
export default NavbarItemLink;
