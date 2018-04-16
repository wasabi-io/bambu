import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Color, colorValues} from '../../base/css';
import HTMLComponent, {HTMLAllAttributes} from '../../base/html/HTML';
import NavbarStyle from '../../base/css/bulma';

export interface NavbarBurgerProps extends HTMLAllAttributes {
    isActive?: boolean;
    color?: string | Color;
    dataTarget?: string;
    tagName?: string;
}

const NavbarBurger: React.SFC<NavbarBurgerProps> = (props: NavbarBurgerProps) => {

    const {tagName, isActive, color, className, dataTarget, ...inputProps} = props;

    const classNames = ClassNames([
        NavbarStyle.navbarBurger,
        isActive ? NavbarStyle.isActive : undefined,
        color ? NavbarStyle[color] : undefined,
        className
    ]);
    (inputProps as any).className = classNames;
    return React.createElement(tagName, inputProps, [props.children, <span key="navbar-burger-span-0"/>, <span key="navbar-burger-span-1"/>, <span key="navbar-burger-span-2"/>]);
};

NavbarBurger.propTypes = {
    ...HTMLComponent.propTypes,
    color: PropTypes.oneOf(colorValues),
    isActive: PropTypes.bool,
    tagName: PropTypes.string
};

NavbarBurger.defaultProps = {
    ...HTMLComponent.defaultProps,
    isActive: false,
    tagName: 'button'
};

NavbarBurger.displayName = 'NavbarBurger';

export default NavbarBurger;
