/// <reference types="react" />
import * as React from 'react';
import { Color, Size } from '../../base/css';
import { HTMLArticleProps } from '../../base/html/HTML';
export interface MessageProps extends HTMLArticleProps {
    color?: string | Color;
    size?: string | Size;
}
declare const Message: React.SFC<MessageProps>;
export default Message;
