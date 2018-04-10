/// <reference types="react" />
import * as React from 'react';
import { Size } from '../../base/css';
import { HTMLAllAttributes } from '../../base/html/HTML';
export interface DeleteProps extends HTMLAllAttributes {
    tagName?: string;
    bSize?: string | Size;
}
declare const Delete: React.SFC<DeleteProps>;
export default Delete;
