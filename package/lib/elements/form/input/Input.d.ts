/// <reference types="react" />
import * as React from 'react';
import { Color, Size } from '../../../base/css';
import { State } from '../../../base/css/state';
import { HTMLInputProps } from '../../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface InputProps extends HTMLInputProps {
    color?: string | Color;
    iSize?: string | Size;
    state?: string | State;
    onChange?: any;
}
declare const Input: React.SFC<InputProps>;
export default Input;
