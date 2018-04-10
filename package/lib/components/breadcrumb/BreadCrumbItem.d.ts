/// <reference types="react" />
import * as React from 'react';
import { HTMLAProps } from '../../base/html/HTML';
export interface BreadCrumbItemProps extends HTMLAProps {
    isActive?: boolean;
}
declare const BreadCrumbItem: React.SFC<BreadCrumbItemProps>;
export default BreadCrumbItem;
