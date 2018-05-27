import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as MessageStyle, HTMLComponent, HTMLDivProps} from "../../";

export interface MessageHeaderProps extends HTMLDivProps {
    elementRef?: (ref: any) => any;
}

export default class MessageHeader extends React.Component<MessageHeaderProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

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
