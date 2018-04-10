/// <reference types="react" />
import * as React from 'react';
import { Color, Size, State } from '../../../../base/css';
import { HTMLDivProps } from '../../../../base/html/HTML';
export interface SelectProps extends HTMLDivProps {
    color?: string | Color;
    iSize?: string | Size;
    state?: string | State;
    name?: string;
    multiple: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    size?: number;
    value?: string | string[] | number;
    onChange?: any;
}
declare const Select: React.SFC<SelectProps>;
export default Select;
