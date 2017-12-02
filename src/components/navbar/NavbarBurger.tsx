import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import {ButtonProps} from "rebul/lib/elements/button";
import Button from "rebul/lib/elements/button/Button";
import HTMLComponent from "../../base/html/HTML";
import NavbarStyle from "./NavbarStyle";

export interface NavbarBurgerProps extends ButtonProps {
    active?: boolean;
    dataTarget?: string;
}

const NavbarBurger: React.SFC<ButtonProps> = (props: NavbarBurgerProps) => {

    const {active, className, dataTarget, ...inputProps} = props;

    const classNames = ClassNames([
        NavbarStyle.navbarBurger,
        active ? NavbarStyle.isActive : undefined,
        className
    ]);

    return (
        <Button className={classNames} {...inputProps} data-target={dataTarget}>
            {props.children}
            <span/>
            <span/>
            <span/>
        </Button>
    );
};

NavbarBurger.propTypes = {
    ...HTMLComponent.propTypes,
    active: PropTypes.bool
};

NavbarBurger.defaultProps = {
    ...HTMLComponent.defaultProps,
    active: false
};

NavbarBurger.displayName = "NavbarBurger";

export default NavbarBurger;
