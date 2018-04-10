/// <reference types="react" />
import * as React from 'react';
import { HTMLDivProps } from '../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface FieldProps extends HTMLDivProps {
    hasAddons?: boolean;
    hasAddonsCentered?: boolean;
    hasAddonsRight?: boolean;
    isHorizontal?: boolean;
    isGrouped?: boolean;
    isGroupedCentered?: boolean;
    isGroupedMultiline?: boolean;
    isGroupedRight?: boolean;
    isNarrow?: boolean;
}
declare const Field: React.SFC<FieldProps>;
export default Field;
