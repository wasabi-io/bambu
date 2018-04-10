/// <reference types="react" />
import * as React from 'react';
import { HTMLDivProps } from '../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface LevelItemProps extends HTMLDivProps {
    hasTextCentered?: boolean;
}
declare const LevelItem: React.SFC<LevelItemProps>;
export default LevelItem;
