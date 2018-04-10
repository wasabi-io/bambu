/// <reference types="react" />
import * as React from 'react';
import { Size } from '../../base/css';
import { HTMLDivProps } from '../../base/html/HTML';
/**
 * Refers Html Props and Additional Props.
 */
export interface FieldBodyProps extends HTMLDivProps {
    size?: string | Size;
}
declare const FieldBody: React.SFC<FieldBodyProps>;
export default FieldBody;
