import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as NavbarStyle, Color, colorValues, HTMLAllAttributes, HTMLComponent} from "../../";

export interface NavbarBurgerProps extends HTMLAllAttributes {
    isActive?: boolean;
    color?: string | Color;
    dataTarget?: string;
    tagName?: string;
    elementRef?: any;
}

export default class NavbarBurger extends React.Component<NavbarBurgerProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        color: PropTypes.oneOf(colorValues),
        isActive: PropTypes.bool,
        tagName: PropTypes.string
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false,
        tagName: 'button'
    };

    public render(): JSX.Element {
        const {tagName, isActive, color, className, children, dataTarget, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames(
            NavbarStyle.navbarBurger,
            {[`${NavbarStyle.isActive}`]: isActive, [`${NavbarStyle[color]}`]: !!color},
            className
        );

        return React.createElement(
            tagName, {
                className: classNames,
                'data-target': dataTarget,
                ref: elementRef,
                ...inputProps
            },
            [
                children,
                <span key="navbar-burger-span-0"/>,
                <span key="navbar-burger-span-1"/>,
                <span key="navbar-burger-span-2"/>
            ]
        );
    }
}
