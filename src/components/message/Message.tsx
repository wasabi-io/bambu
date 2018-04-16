import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Color, Size} from '../../base/css';
import HTMLComponent, {HTMLArticleProps} from '../../base/html/HTML';
import MessageStyle from '../../base/css/bulma';

export interface MessageProps extends HTMLArticleProps {
    color?: string | Color;
    size?: string | Size;
}

const Message: React.SFC<MessageProps> = (props: MessageProps) => {
    const {children, className, color, size, ...ownProps} = props;

    const classNames = ClassNames(
        MessageStyle.message,
        MessageStyle[color],
        MessageStyle[size],
        className
    );

    return (
        <article className={classNames} {...ownProps} >
            {children}
        </article>
    );
};

Message.propTypes = {
    ...HTMLComponent.propTypes,
    color: PropTypes.string,
};

Message.defaultProps = {
    ...HTMLComponent.defaultProps,
};

Message.displayName = 'Message';

export default Message;
