import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import HTMLComponent, { HTMLAllAttributes } from "../../base/html/HTML";
import NavbarStyle from "./NavbarStyle";

export interface NavbarItemProps extends HTMLAllAttributes {
    isActive?: boolean;
    tagName?: string
}

const NavbarItem: React.SFC<NavbarItemProps> = (props: NavbarItemProps) => {
    const { tagName, isActive, className, ...inputProps } = props;
    const classNames = ClassNames([NavbarStyle.navbarItem, isActive ? NavbarStyle.isActive : undefined, className]);
    (inputProps as any).className = classNames;
    return React.createElement(tagName, inputProps, props.children);
};

NavbarItem.propTypes = {
    ...HTMLComponent.propTypes,
    isActive: PropTypes.bool
};

NavbarItem.defaultProps = {
    ...HTMLComponent.defaultProps,
    isActive: false,
    tagName: "a"
};

NavbarItem.displayName = "NavbarItem";

export default NavbarItem;
