/// <reference types="react" />
import * as React from 'react';
import { HTMLDivProps } from '../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface ColumnProps extends HTMLDivProps {
    isNarrow?: boolean;
    size?: string;
    offset?: string;
}
declare const Column: React.SFC<ColumnProps>;
export default Column;
