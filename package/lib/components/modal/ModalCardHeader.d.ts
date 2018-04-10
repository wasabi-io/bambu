/// <reference types="react" />
import * as React from 'react';
import { HTMLHeaderProps } from '../../base/html/HTML';
export interface ModalCardHeaderProps extends HTMLHeaderProps {
    header?: string;
}
declare const ModalCardHeader: React.SFC<ModalCardHeaderProps>;
export default ModalCardHeader;
