import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Objects, Props, Strings} from "wasabi-common";
import {bulma as NavbarStyle, Color, colorValues, HTMLComponent, HTMLNavProps, Vertical, verticalValues} from "../../";

export enum navBarArialLabel {
    main = 'main',
    dropdown = 'dropdown'
}

export enum navBarRole {
    navigation = 'navigation'
}

export interface NavbarProps extends HTMLNavProps {
    arialLabel?: string | navBarArialLabel;
    color?: string | Color;
    isFixed?: string | Vertical;
    hasShadow?: boolean;
    role?: navBarRole | string;
    isTransparent?: boolean;
    isSpaced?: boolean;
    elementRef?: any;
}

export default class Navbar extends React.Component<NavbarProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        arialLabel: PropTypes.oneOf(Objects.values(navBarArialLabel)),
        color: PropTypes.oneOf(colorValues),
        isFixed: PropTypes.oneOf(verticalValues),
        hasShadow: PropTypes.bool,
        role: PropTypes.oneOf(Objects.values(navBarRole)),
        isTransparent: PropTypes.bool,
        isSpaced: PropTypes.bool
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        arialLabel: 'main',
        hasShadow: false,
        role: navBarRole.navigation,
        isTransparent: false,
        isSpaced: false
    };

    public render(): JSX.Element {
        const {color, arialLabel, isFixed, hasShadow, isTransparent, isSpaced, className, children, elementRef, ...navbarProps} = this.props;

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
            <nav className={classNames} aria-label={`${arialLabel} navigation`} {...navbarProps}  ref={elementRef}>
                {children}
            </nav>
        );
    }
}
