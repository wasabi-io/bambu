/// <reference types="react" />
import * as React from 'react';
import { Alignment, Size } from '../../base/css';
import { HTMLElementProps } from '../../base/html/HTML';
export declare enum BreadCrumbSeperator {
    arrow = "hasArrowSeparator",
    bullet = "hasBulletSeparator",
    dot = "hasDotSeparator",
    succeeds = "hasSucceedsSeparator",
}
/**
 * Refers Html Props and Additional Props.
 */
export interface BreadCrumbProps extends HTMLElementProps {
    alignment?: string | Alignment;
    separator?: string | BreadCrumbSeperator;
    size?: string | Size;
}
declare const BreadCrumb: React.SFC<BreadCrumbProps>;
export default BreadCrumb;
