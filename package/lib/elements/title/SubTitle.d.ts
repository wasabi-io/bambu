/// <reference types="react" />
import * as React from 'react';
import { Size6 } from '../../base/css';
import { HTMLPProps } from '../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface SubTitleProps extends HTMLPProps {
    size?: string | Size6;
    tagName?: string;
}
declare const SubTitle: React.SFC<SubTitleProps>;
export default SubTitle;
