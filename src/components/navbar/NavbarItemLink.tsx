import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import NavbarStyle from '../../base/css/bulma';
import HTMLComponent, { HTMLAllAttributes } from '../../base/html/HTML';

export interface NavbarItemLinkProps extends HTMLAllAttributes {
    isActive?: boolean;
}

const NavbarItemLink: React.SFC<NavbarItemLinkProps> = (props: NavbarItemLinkProps) => {

    const { isActive, className, ...inputProps } = props;

    const classNames = ClassNames(
        NavbarStyle.navbarItem,
        {
            [`${NavbarStyle.isActive}`]: isActive
        },
        className
    );

    return (
        <a className={classNames} {...inputProps}>
            {props.children}
        </a>
    );
};

NavbarItemLink.propTypes = {
    ...HTMLComponent.propTypes,
    isActive: PropTypes.bool
};

NavbarItemLink.defaultProps = {
    ...HTMLComponent.defaultProps,
    isActive: false
};

NavbarItemLink.displayName = 'NavbarItemLink';

export default NavbarItemLink;
