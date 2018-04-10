/// <reference types="react" />
import * as React from 'react';
import { HTMLTdProps } from '../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface CellProps extends HTMLTdProps {
    isIcon?: boolean;
}
declare const Cell: React.SFC<CellProps>;
export default Cell;
