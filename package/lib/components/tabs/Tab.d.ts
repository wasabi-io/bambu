/// <reference types="react" />
import * as React from 'react';
import { HTMLLiProps } from '../../base/html/HTML';
export interface TabProps extends HTMLLiProps {
    isActive?: boolean;
}
declare const Tab: React.SFC<TabProps>;
export default Tab;
