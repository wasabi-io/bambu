import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as MenuStyle, HTMLAProps, HTMLComponent} from '../../';

export interface MenuLinkProps extends HTMLAProps {
    isActive?: boolean;
    href?: string;
}

export default class MenuLink extends React.Component<MenuLinkProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool,
        href: PropTypes.string
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false
    };

    public render(): JSX.Element {
        const {isActive, className, children, ...inputProps} = this.props;

        const classNames = ClassNames({[`${MenuStyle.isActive}`]: isActive}, className);

        return (
            <a className={classNames} {...inputProps}>
                {children}
            </a>
        );
    }
}
