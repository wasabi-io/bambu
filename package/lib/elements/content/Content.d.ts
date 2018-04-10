/// <reference types="react" />
import * as React from 'react';
import { HTMLElementProps } from '../../base/html/HTML';
import { Size } from '../../base/css';
export interface ContentProps extends HTMLElementProps {
    size?: string | Size;
}
declare const Content: React.SFC<ContentProps>;
export default Content;
