/// <reference types="react" />
import * as React from 'react';
import { HTMLDivProps } from '../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface DropdownItemProps extends HTMLDivProps {
    tagName?: string;
    isActive?: boolean;
}
declare const DropdownItem: React.SFC<DropdownItemProps>;
export default DropdownItem;
