import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import {HTMLAttributes} from "react";
import {colorValues} from "../../base/css";
import HTMLComponent, {HTMLArticleProps} from "../../base/html/HTML";
import MessageStyle from "./MessageStyle";

export interface MessageProps extends HTMLArticleProps {
    header?: any;
    body?: HTMLAttributes<HTMLDivElement>;
}

const Message: React.SFC<MessageProps> = (props: MessageProps) => {

    const {className, header, color, body, ...inputProps} = props;

    const classNames = ClassNames([MessageStyle.message, MessageStyle[color], className]);

    const {className: bodyClassName, ...bodyProps} = body;

    const bodyClassNames = ClassNames([MessageStyle.messageBody, bodyClassName]);

    return (
        <article {...props} className={classNames} {...inputProps} >
            {header ? this.renderHeader() : null}
            <div className={bodyClassNames} {...bodyProps} >
                {this.props.children}
            </div>
        </article>
    );
};

Message.propTypes = {
    ...HTMLComponent.propTypes,
    body: PropTypes.object,
    color: PropTypes.oneOf(colorValues),
    header: PropTypes.any
};

Message.defaultProps = {
    ...HTMLComponent.defaultProps,
    body: {}
};

Message.displayName = "Message";

export default  Message;
