/// <reference types="react" />
import * as React from 'react';
import { Alignment, Size } from '../../base/css';
import { HTMLDivProps } from '../../base/html/HTML';
export declare enum tabsStyle {
    boxed = "isBoxed",
    toggle = "isToggle",
}
export interface TabsProps extends HTMLDivProps {
    alignment?: string | Alignment;
    isFullwidth?: boolean;
    size?: string | Size;
    tabStyle?: string | tabsStyle;
}
declare const Tabs: React.SFC<TabsProps>;
export default Tabs;
