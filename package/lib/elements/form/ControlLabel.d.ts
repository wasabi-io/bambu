/// <reference types="react" />
import * as React from 'react';
import { Size } from '../../base/css';
import { HTMLLabelProps } from '../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface ControlLabelProps extends HTMLLabelProps {
    size?: string | Size;
    isRadio?: boolean;
}
declare const ControlLabel: React.SFC<ControlLabelProps>;
export default ControlLabel;
