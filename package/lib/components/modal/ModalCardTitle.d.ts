/// <reference types="react" />
import * as React from 'react';
import { HTMLHeaderProps } from '../../base/html/HTML';
export interface ModalCardTitleProps extends HTMLHeaderProps {
    header?: string;
}
declare const ModalCardTitle: React.SFC<ModalCardTitleProps>;
export default ModalCardTitle;
