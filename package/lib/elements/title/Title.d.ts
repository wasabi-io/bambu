/// <reference types="react" />
import * as React from 'react';
import { Size6 } from '../../base/css';
import { HTMLPProps } from '../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface TitleProps extends HTMLPProps {
    size?: string | Size6;
    tagName?: string;
}
declare const Title: React.SFC<TitleProps>;
export default Title;
