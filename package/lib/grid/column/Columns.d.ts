/// <reference types="react" />
import * as React from 'react';
import { Responsive } from '../../base/css';
import { HTMLDivProps } from '../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface ColumnsProps extends HTMLDivProps {
    isMultiline?: boolean;
    isVcentered?: boolean;
    isGapless?: boolean;
    responsive?: string | Responsive;
}
declare const Columns: React.SFC<ColumnsProps>;
export default Columns;
