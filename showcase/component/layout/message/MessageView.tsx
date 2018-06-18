import * as PropTypes from "prop-types";
import * as React from "react";
import {Color} from "bambu";
import {Message, MessageBody, MessageHeader, MessageProps} from "bambu/lib/components/message/index";

export interface MessageViewProps extends MessageProps {
    header?: string | JSX.Element | JSX.Element[];
    children: any;
}

const MessageView: React.SFC<MessageViewProps> = ((props: MessageViewProps) => {
    const {header, children, ...messageProps} = props;
    return (
        <Message {...messageProps}>
            {header && (
                <MessageHeader key={"message-header"}>
                    {header}
                </MessageHeader>
            )}
            <MessageBody key={"message-body"}>
                {children}
            </MessageBody>
        </Message>
    );
});

MessageView.propTypes = {
    ...Message.propTypes,
    header: PropTypes.string
};

MessageView.defaultProps = {
    ...Message.defaultProps,
    color: Color.info,
};

export default MessageView;
