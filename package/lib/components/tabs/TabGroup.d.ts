/// <reference types="react" />
import * as React from 'react';
import { Alignment } from '../../base/css';
import { HTMLDivProps } from '../../base/html/HTML';
export interface TabGroupProps extends HTMLDivProps {
    alignment?: string | Alignment;
}
declare const TabGroup: React.SFC<TabGroupProps>;
export default TabGroup;
