import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as NavbarStyle, HTMLComponent, HTMLDivProps} from "../../";

export interface NavbarMenuProps extends HTMLDivProps {
    isActive?: boolean;
}

const NavbarMenu: React.SFC<NavbarMenuProps> = (props: NavbarMenuProps) => {

    const {isActive, className, ...navbarMenuProps} = props;

    const classNames = ClassNames(
        NavbarStyle.navbarMenu,
        {
            [`${NavbarStyle.isActive}`]: isActive,
        },
        className
    );

    return (
        <div className={classNames} {...navbarMenuProps}>
            {props.children}
        </div>
    );
};

NavbarMenu.propTypes = {
    ...HTMLComponent.propTypes,
    isActive: PropTypes.bool
};

NavbarMenu.defaultProps = {
    ...HTMLComponent.defaultProps,
    isActive: false
};

NavbarMenu.displayName = 'NavbarMenu';

export default NavbarMenu;
