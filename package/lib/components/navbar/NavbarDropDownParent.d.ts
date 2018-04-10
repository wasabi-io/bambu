/// <reference types="react" />
import * as React from 'react';
import { HTMLDivProps } from '../../base/html/HTML';
export declare enum ShowingState {
    active = "active",
    hoverable = "hoverable",
}
export interface NavbarDropdownParentProps extends HTMLDivProps {
    active?: boolean;
    up?: boolean;
    state?: ShowingState;
}
declare const NavbarDropdownParent: React.SFC<NavbarDropdownParentProps>;
export default NavbarDropdownParent;
