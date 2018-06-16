import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as NavbarStyle, HTMLAllAttributes, HTMLComponent} from "../../";

export interface NavbarItemProps extends HTMLAllAttributes {
    isActive?: boolean;
    isHoverable?: boolean;
    hasDropdown?: boolean;
    hasDropdownUp?: boolean;
    tagName?: string;
    elementRef?: (ref: any) => any;
}

export default class NavbarItem extends React.Component<NavbarItemProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool,
        isHoverable: PropTypes.bool,
        hasDropdown: PropTypes.bool,
        hasDropdownUp: PropTypes.bool,
        tagName: PropTypes.string,
        elementRef: PropTypes.func
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false,
        isHoverable: false,
        hasDropdown: false,
        hasDropdownUp: false
    };

    public render(): JSX.Element {
        const {tagName, href, isActive, isHoverable, hasDropdown, hasDropdownUp, className, children, elementRef, ...navbarItemProps} = this.props;
        const tag = tagName ? tagName : (href ? "a" : "div");
        const classNames = ClassNames(
            NavbarStyle.navbarItem,
            {
                [`${NavbarStyle.isActive}`]: isActive,
                [`${NavbarStyle.isHoverable}`]: isHoverable,
                [`${NavbarStyle.hasDropdown}`]: hasDropdown,
                [`${NavbarStyle.hasDropdownUp}`]: hasDropdownUp,
            },
            className
        );

        return React.createElement(tag, {
            className: classNames,
            ref: elementRef,
            ...navbarItemProps
        }, children);
    }
}

