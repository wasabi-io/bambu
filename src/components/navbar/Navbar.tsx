import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Strings} from "wasabi-common";
import {bulma as NavbarStyle, Color, colorValues, HTMLComponent, HTMLNavProps, Vertical, verticalValues} from "../../";

export interface NavbarProps extends HTMLNavProps {
    color?: string | Color;
    isFixed?: string | Vertical;
    hasShadow?: boolean;
    isTransparent?: boolean;
    isSpaced?: boolean;
    elementRef?: (ref: any) => any;
}

export default class Navbar extends React.Component<NavbarProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        color: PropTypes.oneOf(colorValues),
        isFixed: PropTypes.oneOf(verticalValues),
        hasShadow: PropTypes.bool,
        isTransparent: PropTypes.bool,
        isSpaced: PropTypes.bool,
        elementRef: PropTypes.func
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        hasShadow: false,
        role: "navigation",
        "aria-label": "main navigation",
        isTransparent: false,
        isSpaced: false
    };

    public render(): JSX.Element {
        const {color, isFixed, hasShadow, isTransparent, isSpaced, className, children, elementRef, ...navbarProps} = this.props;

        const fixedClassName = Strings.has(isFixed) ? `isFixed${Strings.capitalizeFirstLetter(isFixed)}` : undefined;

        const classNames = ClassNames(
            NavbarStyle.navbar,
            NavbarStyle[fixedClassName],
            {
                [`${NavbarStyle.hasShadow}`]: hasShadow,
                [`${NavbarStyle.isTransparent}`]: isTransparent,
                [`${NavbarStyle[color]}`]: !!(color),
                [`${NavbarStyle.isSpaced}`]: isSpaced,
            },
            className
        );

        return (
            <nav className={classNames} {...navbarProps} ref={elementRef}>
                {children}
            </nav>
        );
    }
}
