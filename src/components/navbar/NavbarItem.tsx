import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as NavbarStyle, HTMLAllAttributes, HTMLComponent} from "../../";

export interface NavbarItemProps extends HTMLAllAttributes {
    isActive?: boolean;
    isHoverable?: boolean;
    hasDropdown?: boolean;
    tagName?: string;
}

export default class NavbarItem extends React.Component<NavbarItemProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool,
        isHoverable: PropTypes.bool,
        hasDropdown: PropTypes.bool,
        tagName: PropTypes.string
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false,
        isHoverable: false,
        hasDropdown: false,
        tagName: 'a'
    };

    public render(): JSX.Element {
        const {tagName, isActive, isHoverable, hasDropdown, className, children, ...navbarItemProps} = this.props;
        const classNames = ClassNames(
            NavbarStyle.navbarItem,
            {
                [`${NavbarStyle.isActive}`]: isActive,
                [`${NavbarStyle.isHoverable}`]: isHoverable,
                [`${NavbarStyle.hasDropdown}`]: hasDropdown,
            },
            className
        );

        return React.createElement(tagName, {
            className: classNames,
            ...navbarItemProps
        }, children);
    }
}

