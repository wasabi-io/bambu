import * as ClassNames from 'classnames';
import * as React from 'react';
import {bulma as MessageStyle, HTMLComponent, HTMLDivProps} from "../../";

export type MessageHeaderProps = HTMLDivProps;

const MessageHeader: React.SFC<MessageHeaderProps> = (props: MessageHeaderProps) => {
    const {children, className, ...ownProps} = props;

    const classNames = ClassNames(
        MessageStyle.messageHeader,
        className
    );

    return (
        <div className={classNames} {...ownProps} >
            {children}
        </div>
    );
};

MessageHeader.propTypes = {
    ...HTMLComponent.propTypes,
};

MessageHeader.defaultProps = {
    ...HTMLComponent.defaultProps,
};

MessageHeader.displayName = 'MessageHeader';

export default MessageHeader;
