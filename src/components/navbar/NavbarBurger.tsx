import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import { ButtonProps } from "rebul/lib/elements/button";
import Button from "rebul/lib/elements/button/Button";
import HTMLComponent from "../../base/html/HTML";
import NavbarStyle from "./NavbarStyle";
import { Color, colorValues } from "rebul/lib/base/css";

export interface NavbarBurgerProps extends ButtonProps {
    isActive?: boolean;
    color?: string | Color;
    dataTarget?: string;
}

const NavbarBurger: React.SFC<ButtonProps> = (props: NavbarBurgerProps) => {

    const { isActive, color, className, dataTarget, ...inputProps } = props;

    const classNames = ClassNames([
        NavbarStyle.navbarBurger,
        isActive ? NavbarStyle.isActive : undefined,
        color ? NavbarStyle[color] : undefined,
        className
    ]);

    return (
        <Button className={classNames} {...inputProps} data-target={dataTarget}>
            {props.children}
            <span />
            <span />
            <span />
        </Button>
    );
};

NavbarBurger.propTypes = {
    ...HTMLComponent.propTypes,
    color: PropTypes.oneOf(colorValues),
    isActive: PropTypes.bool
};

NavbarBurger.defaultProps = {
    ...HTMLComponent.defaultProps,
    isActive: false
};

NavbarBurger.displayName = "NavbarBurger";

export default NavbarBurger;
