import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as MessageStyle, Color, HTMLArticleProps, HTMLComponent, Size, sizeValues} from '../../';

export interface MessageProps extends HTMLArticleProps {
    color?: string | Color;
    bSize?: string | Size;
}

const Message: React.SFC<MessageProps> = (props: MessageProps) => {
    const {children, className, color, bSize, ...ownProps} = props;

    const classNames = ClassNames(
        MessageStyle.message,
        MessageStyle[color],
        MessageStyle[bSize],
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
    bSize: PropTypes.oneOf(sizeValues),
};

Message.defaultProps = {
    ...HTMLComponent.defaultProps,
};

Message.displayName = 'Message';

export default Message;
