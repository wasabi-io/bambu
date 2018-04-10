/// <reference types="react" />
import * as React from 'react';
import { Alignment, Size } from '../../base/css';
import { HTMLNavProps } from '../../base/html/HTML';
export interface PaginationProps extends HTMLNavProps {
    alignment?: string | Alignment;
    size?: string | Size;
    isRounded?: boolean;
    previous?: boolean;
    previousText?: string;
    next?: boolean;
    nextText?: string;
}
declare const Pagination: React.SFC<PaginationProps>;
export default Pagination;
