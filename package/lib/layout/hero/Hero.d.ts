/// <reference types="react" />
import * as React from 'react';
import { Color } from '../../base/css';
import { HTMLSectionProps } from '../../base/html/HTML';
export declare enum HeroSize {
    isSmall = "isSmall",
    isMedium = "isMedium",
    isLarge = "isLarge",
    isFullheight = "isFullheight",
}
/**
 * Refers Html Props and Additional Props.
 */
export interface HeroProps extends HTMLSectionProps {
    color?: string | Color;
    isBold?: boolean;
    size?: string | HeroSize;
}
declare const Hero: React.SFC<HeroProps>;
export default Hero;
