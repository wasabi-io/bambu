/// <reference types="react" />
import * as React from 'react';
import { Color } from '../../base/css';
import { HTMLDivProps } from '../../base/html/HTML';
export interface NotificationProps extends HTMLDivProps {
    color?: string | Color;
}
declare const Notification: React.SFC<NotificationProps>;
export default Notification;
