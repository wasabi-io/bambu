/// <reference types="react" />
import * as React from 'react';
import { HTMLDivProps } from '../../base/html/HTML';
export interface NavbarBrandProps extends HTMLDivProps {
    hasShadow?: boolean;
}
declare const NavbarBrand: React.SFC<NavbarBrandProps>;
export default NavbarBrand;
