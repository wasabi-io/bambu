import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as MenuStyle, HTMLAProps, HTMLComponent} from '../../';

export interface MenuLinkProps extends HTMLAProps {
    isActive?: boolean;
    href?: string;
}

const MenuLink: React.SFC<MenuLinkProps> = (props: MenuLinkProps) => {

    const {isActive, className, ...inputProps} = props;

    const classNames = ClassNames(
        {
            [`${MenuStyle.isActive}`]: isActive
        },
        className
    );

    return (
        <a className={classNames} {...inputProps}>
            {props.children}
        </a>
    );
};

MenuLink.propTypes = {
    ...HTMLComponent.propTypes,
    isActive: PropTypes.bool,
    href: PropTypes.string
};

MenuLink.defaultProps = {
    ...HTMLComponent.defaultProps,
    isActive: false
};

MenuLink.displayName = 'MenuLink';

export default MenuLink;
