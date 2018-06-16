import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as MessageStyle, HTMLComponent, HTMLDivProps} from "../../";

export interface MessageHeaderProps extends HTMLDivProps {
    elementRef?: (ref: any) => any;
}

export default class MessageHeader extends React.Component<MessageHeaderProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...ownProps} = this.props;

        const classNames = ClassNames(
            MessageStyle.messageHeader,
            className
        );

        return (
            <div className={classNames} {...ownProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}
