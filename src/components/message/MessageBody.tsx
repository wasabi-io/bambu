import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as MessageStyle, HTMLComponent, HTMLDivProps} from "../../";

export interface MessageBodyProps extends HTMLDivProps {
    elementRef?: (ref: any) => any;
}

/**
 * The content of <code>{&lt;Message /&gt;}</code> component.
 */
export default class MessageBody extends React.Component<MessageBodyProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...ownProps} = this.props;

        const classNames = ClassNames(
            MessageStyle.messageBody,
            className
        );

        return (
            <div className={classNames} {...ownProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}
