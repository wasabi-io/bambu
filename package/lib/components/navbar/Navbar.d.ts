/// <reference types="react" />
import * as React from 'react';
import { Color, Vertical } from '../../base/css';
import { HTMLNavProps } from '../../base/html/HTML';
export declare enum navBarArialLabel {
    main = "main",
    dropdown = "dropdown",
}
export declare enum navBarRole {
    navigation = "navigation",
}
export interface NavbarProps extends HTMLNavProps {
    arialLabel?: string | navBarArialLabel;
    color?: string | Color;
    isFixed?: string | Vertical;
    hasShadow?: boolean;
    role?: navBarRole | string;
    isTransparent?: boolean;
}
declare const Navbar: React.SFC<NavbarProps>;
export default Navbar;
