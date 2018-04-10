/// <reference types="react" />
import * as React from 'react';
import { Color } from '../../base/css';
import { HTMLPProps } from '../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface FieldHelpProps extends HTMLPProps {
    color?: string | Color;
}
declare const FieldHelp: React.SFC<FieldHelpProps>;
export default FieldHelp;
