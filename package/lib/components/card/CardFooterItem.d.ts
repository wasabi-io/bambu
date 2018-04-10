/// <reference types="react" />
import * as React from 'react';
import { HTMLElementProps } from '../../base/html/HTML';
export interface CardFooterItemProps extends HTMLElementProps {
    tagName?: string;
}
declare const CardFooterItem: React.SFC<CardFooterItemProps>;
export default CardFooterItem;
