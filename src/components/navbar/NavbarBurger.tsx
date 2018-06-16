import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as NavbarStyle, Color, colorValues, HTMLAllAttributes, HTMLComponent} from "../../";

export interface NavbarBurgerProps extends HTMLAllAttributes {
    isActive?: boolean;
    color?: string | Color;
    tagName?: string;
    elementRef?: (ref: any) => any;
}

export default class NavbarBurger extends React.Component<NavbarBurgerProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        color: PropTypes.oneOf(colorValues),
        isActive: PropTypes.bool,
        tagName: PropTypes.string,
        elementRef: PropTypes.func
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false,
        tagName: 'a',
        role: "button",
        "aria-label": "menu",
        "aria-expanded": "false",
    };

    public render(): JSX.Element {
        const {tagName, isActive, color, className, onClick, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames(
            NavbarStyle.navbarBurger,
            {[`${NavbarStyle.isActive}`]: isActive, [`${NavbarStyle[color]}`]: !!color},
            className
        );

        return React.createElement(
            tagName, {
                onClick,
                className: classNames,
                ref: elementRef,
                ...inputProps
            },
            [
                children,
                <span key="navbar-burger-span-0" aria-hidden="true"/>,
                <span key="navbar-burger-span-1" aria-hidden="true"/>,
                <span key="navbar-burger-span-2" aria-hidden="true"/>
            ]
        );
    }
}
