import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import MenuStyle from '../../base/css/bulma';
import HTMLComponent, { HTMLAProps } from '../../base/html/HTML';

export interface MenuLinkProps extends HTMLAProps {
    isActive?: boolean;
    href?: string;
}

const MenuLink: React.SFC<MenuLinkProps> = (props: MenuLinkProps) => {

    const { isActive, className, ...inputProps } = props;

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
