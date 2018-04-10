/// <reference types="react" />
import * as React from 'react';
import { HTMLAProps } from '../../base/html/HTML';
export interface PaginationLinkProps extends HTMLAProps {
    isCurrent?: boolean;
    page: string | number;
}
declare const PaginationLink: React.SFC<PaginationLinkProps>;
export default PaginationLink;
