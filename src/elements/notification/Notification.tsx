import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as NotificationStyle, Color, HTMLComponent, HTMLDivProps} from '../../';

export interface NotificationProps extends HTMLDivProps {
    color?: string | Color;
    elementRef?: (ref: any) => any;
}

export default class Notification extends React.Component<NotificationProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        color: PropTypes.string,
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {color, children, className, elementRef, ...ownProps} = this.props;

        const classNames = ClassNames(
            NotificationStyle.notification,
            NotificationStyle[color],
            className
        );
        return (
            <div className={classNames} {...ownProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}

