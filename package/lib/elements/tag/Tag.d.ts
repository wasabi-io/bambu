/// <reference types="react" />
import * as React from 'react';
import { Color, Size } from '../../base/css';
import { HTMLAllAttributes } from '../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface TagProps extends HTMLAllAttributes {
    color?: string | Color;
    bSize?: string | Size;
    tagName?: string;
}
declare const Tag: React.SFC<TagProps>;
export default Tag;
