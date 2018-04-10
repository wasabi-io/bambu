/// <reference types="react" />
import * as React from 'react';
import { HTMLDivProps } from '../../base/html/HTML';
export interface ModalCardProps extends HTMLDivProps {
    isActive?: boolean;
}
declare const ModalCard: React.SFC<ModalCardProps>;
export default ModalCard;
