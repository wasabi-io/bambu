/// <reference types="react" />
import * as React from 'react';
import { Responsive } from '../../base/css';
import { HTMLElementProps } from '../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface LevelProps extends HTMLElementProps {
    responsive?: Responsive;
}
declare const Level: React.SFC<LevelProps>;
export default Level;
