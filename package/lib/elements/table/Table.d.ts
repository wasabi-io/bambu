/// <reference types="react" />
import * as React from 'react';
import { HTMLTableProps } from '../../base/html/HTML';
export interface TableProps extends HTMLTableProps {
    isBordered?: boolean;
    isStriped?: boolean;
    isNarrow?: boolean;
    isHoverable?: boolean;
    isFullwidth?: boolean;
}
declare const Table: React.SFC<TableProps>;
export default Table;
