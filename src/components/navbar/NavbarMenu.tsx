import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import HTMLComponent, { HTMLDivProps } from "../../base/html/HTML";
import NavbarStyle from "./NavbarStyle";

export interface NavbarMenuProps extends HTMLDivProps {
    active?: boolean;
}

const NavbarMenu: React.SFC<NavbarMenuProps> = (props: NavbarMenuProps) => {

    const { active, className, ...inputProps } = props;

    const classNames = ClassNames([
        NavbarStyle.navbarMenu,
        active ? NavbarStyle.isActive : undefined,
        className
    ]);

    return (
        <div className={classNames} role="navigation" aria-label="main navigation" {...inputProps}>
            {props.children}
        </div>
    );
};

NavbarMenu.propTypes = {
    ...HTMLComponent.propTypes,
    active: PropTypes.bool
};

NavbarMenu.defaultProps = {
    ...HTMLComponent.defaultProps,
    active: false
};

NavbarMenu.displayName = "NavbarMenu";

export default NavbarMenu;
