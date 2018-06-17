import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as CardStyle, HTMLAProps, HTMLComponent} from '../../';
import Icon, {IconProps} from '../../elements/icon/Icon';


export interface CardHeaderIconProps extends HTMLAProps {
    icon?: IconProps;
    elementRef?: (ref: any) => any;
}

/**
 * A placeholder for an icon in <code>{&lt;CardHeader /&gt;}</code> component.
 */
export default class CardHeaderIcon extends React.Component<CardHeaderIconProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        icon: PropTypes.any,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {icon, className, elementRef, children, ...inputProps} = this.props;

        const classNames = ClassNames([
            CardStyle.cardHeaderIcon,
            className
        ]);

        return (
            <a className={classNames} {...inputProps} ref={elementRef}>
                <Icon {...icon}>
                    {children}
                </Icon>
            </a>
        );
    }
}
