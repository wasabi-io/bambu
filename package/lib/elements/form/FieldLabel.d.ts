/// <reference types="react" />
import * as React from 'react';
import { ControlLabelProps } from '../../elements/form/ControlLabel';
import { HTMLDivProps } from '../../base/html/HTML';
export declare enum FieldLabelSize {
    normal = "isNormal",
    small = "isSmall",
    medium = "isMedium",
    large = "isLarge",
}
/**
 * Refers Html Props and Additional Props.
 */
export interface FieldLabelProps extends HTMLDivProps {
    size?: string | FieldLabelSize;
    labelProps?: ControlLabelProps;
}
declare const FieldLabel: React.SFC<FieldLabelProps>;
export default FieldLabel;
