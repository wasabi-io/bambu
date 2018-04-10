/// <reference types="react" />
import * as React from 'react';
import { HTMLTrProps } from '../../base/html/HTML';
export interface RowProps extends HTMLTrProps {
    isSelected?: boolean;
}
declare const Row: React.SFC<RowProps>;
export default Row;
