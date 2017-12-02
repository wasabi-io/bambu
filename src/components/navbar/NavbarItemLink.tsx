import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import HTMLComponent, {HTMLAProps} from "../../base/html/HTML";
import NavbarStyle from "./NavbarStyle";

export interface NavbarItemLinkProps extends HTMLAProps {
    active?: boolean;
}

const NavbarItemLink: React.SFC<NavbarItemLinkProps> = (props: NavbarItemLinkProps) => {

    const {active, className, ...inputProps} = props;

    const classNames = ClassNames([NavbarStyle.navbarItem, active ? NavbarStyle.isActive : undefined, className]);

    return (
        <a className={classNames} {...inputProps}>
            {props.children}
        </a>
    );
};

NavbarItemLink.propTypes = {
    ...HTMLComponent.propTypes,
    active: PropTypes.bool
};

NavbarItemLink.defaultProps = {
    ...HTMLComponent.defaultProps,
    active: false
};

NavbarItemLink.displayName = "NavbarItemLink";

export default NavbarItemLink;
