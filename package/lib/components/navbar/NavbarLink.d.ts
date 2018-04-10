/// <reference types="react" />
import * as React from 'react';
import { HTMLAProps } from '../../base/html/HTML';
export interface NavbarLinkProps extends HTMLAProps {
    href?: string;
}
declare const NavbarLink: React.SFC<NavbarLinkProps>;
export default NavbarLink;
