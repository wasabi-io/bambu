/// <reference types="react" />
import * as React from 'react';
import { IconOptions } from '../../elements/icon/Icon';
import { HTMLAProps } from '../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface CardHeaderIconProps extends HTMLAProps {
    icon?: IconOptions;
}
declare const CardHeaderIcon: React.SFC<CardHeaderIconProps>;
export default CardHeaderIcon;
