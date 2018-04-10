/// <reference types="react" />
import * as React from 'react';
import { Color, Size } from '../../base/css';
import { HTMLProgressProps } from '../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface ProgressProps extends HTMLProgressProps {
    color?: string | Color;
    max: number;
    size?: string | Size;
    value: number;
}
declare const Progress: React.SFC<ProgressProps>;
export default Progress;
