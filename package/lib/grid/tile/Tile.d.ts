/// <reference types="react" />
import * as React from 'react';
import { Size12 } from '../../base/css';
import { HTMLDivProps } from '../../base/html/HTML';
export declare enum TileContext {
    ancestor = "isAncestor",
    parent = "isParent",
    child = "isChild",
}
/**
 * Refers Html Props and Additional Props.
 */
export interface TileProps extends HTMLDivProps {
    context?: string | TileContext;
    isDesktop?: boolean;
    isVertical?: boolean;
    size?: string | Size12;
}
declare const Tile: React.SFC<TileProps>;
export default Tile;
