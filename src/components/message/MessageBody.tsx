import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as MessageStyle, HTMLComponent, HTMLDivProps} from "../../";

export interface MessageBodyProps extends HTMLDivProps {
    elementRef?: any;
}

export default class MessageBody extends React.Component<MessageBodyProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...ownProps} = this.props;

        const classNames = ClassNames(
            MessageStyle.messageBody,
            className
        );

        return (
            <div className={classNames} {...ownProps}  ref={elementRef}>
                {children}
            </div>
        );
    }
}
