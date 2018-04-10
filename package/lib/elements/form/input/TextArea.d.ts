/// <reference types="react" />
import * as React from 'react';
import { Color, Size, State } from '../../../base/css';
import { HTMLTextareaProps } from '../../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface TextAreaProps extends HTMLTextareaProps {
    color?: string | Color;
    size?: string | Size;
    state?: string | State;
}
declare const TextArea: React.SFC<TextAreaProps>;
export default TextArea;
