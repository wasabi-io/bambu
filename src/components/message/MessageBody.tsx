import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import HTMLComponent, {HTMLDivProps} from '../../base/html/HTML';
import MessageStyle from '../../bulma';

export type MessageBodyProps = HTMLDivProps;

const MessageBody: React.SFC<MessageBodyProps> = (props: MessageBodyProps) => {
    const {children, className, ...ownProps} = props;

    const classNames = ClassNames(
        MessageStyle.messageBody,
        className
    );

    return (
        <div className={classNames} {...ownProps} >
            {children}
        </div>
    );
};

MessageBody.propTypes = {
    ...HTMLComponent.propTypes,
};

MessageBody.defaultProps = {
    ...HTMLComponent.defaultProps,
};

MessageBody.displayName = 'MessageBody';

export default MessageBody;
