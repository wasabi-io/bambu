/// <reference types="react" />
import * as React from 'react';
import { HTMLSpanProps } from '../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface TagsProps extends HTMLSpanProps {
    hasAddons?: boolean;
}
declare const Tags: React.SFC<TagsProps>;
export default Tags;
