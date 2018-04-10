/// <reference types="react" />
import * as React from 'react';
import { HTMLDivProps } from '../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface ContainerProps extends HTMLDivProps {
    isFluid?: boolean;
    isFullhd?: boolean;
    isTextCentered?: boolean;
    isWidescreen?: boolean;
}
declare const Container: React.SFC<ContainerProps>;
export default Container;
