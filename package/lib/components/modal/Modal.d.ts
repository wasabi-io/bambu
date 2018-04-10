/// <reference types="react" />
import * as React from 'react';
import { Size } from '../../base/css';
import { HTMLDivProps } from '../../base/html/HTML';
export interface ModalProps extends HTMLDivProps {
    isActive?: boolean;
    hasCloseButton?: boolean;
    buttonSize?: string | Size;
    onCloseButtonClick?: any;
}
declare const Modal: React.SFC<ModalProps>;
export default Modal;
