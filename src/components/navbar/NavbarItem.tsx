import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import HTMLComponent, { HTMLAllAttributes } from '../../base/html/HTML';
import NavbarStyle from './NavbarStyle';

export interface NavbarItemProps extends HTMLAllAttributes {
    isActive?: boolean;
    tagName?: string;
}

const NavbarItem: React.SFC<NavbarItemProps> = (props: NavbarItemProps) => {
    const { tagName, isActive, className, ...navbarItemProps } = props;
    const classNames = ClassNames(
        NavbarStyle.navbarItem,
        {
            [`${NavbarStyle.isActive}`]: isActive,
        },
        className
    );
    (navbarItemProps as any).className = classNames;
    return React.createElement(tagName, navbarItemProps, props.children);
};

NavbarItem.propTypes = {
    ...HTMLComponent.propTypes,
    isActive: PropTypes.bool,
    tagName: PropTypes.string
};

NavbarItem.defaultProps = {
    ...HTMLComponent.defaultProps,
    isActive: false,
    tagName: "a"
};

NavbarItem.displayName = "NavbarItem";

export default NavbarItem;
