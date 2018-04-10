/// <reference types="react" />
import * as React from 'react';
import { HTMLDivProps } from '../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface ControlProps extends HTMLDivProps {
    hasIconsLeft?: boolean;
    hasIconsRight?: boolean;
    isExpanded?: boolean;
    isLoading?: boolean;
}
declare const Control: React.SFC<ControlProps>;
export default Control;
