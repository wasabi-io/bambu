import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import HTMLComponent, {HTMLAllAttributes} from '../../base/html/HTML';
import NavbarStyle from '../../base/css/bulma';

export interface NavbarItemProps extends HTMLAllAttributes {
    isActive?: boolean;
    isHoverable?: boolean;
    hasDropdown?: boolean;
    tagName?: string;
}

const NavbarItem: React.SFC<NavbarItemProps> = (props: NavbarItemProps) => {
    const {tagName, isActive, isHoverable, hasDropdown, className, ...navbarItemProps} = props;
    const classNames = ClassNames(
        NavbarStyle.navbarItem,
        {
            [`${NavbarStyle.isActive}`]: isActive,
            [`${NavbarStyle.isHoverable}`]: isHoverable,
            [`${NavbarStyle.hasDropdown}`]: hasDropdown,
        },
        className
    );
    (navbarItemProps as any).className = classNames;
    return React.createElement(tagName, navbarItemProps, props.children);
};

NavbarItem.propTypes = {
    ...HTMLComponent.propTypes,
    isActive: PropTypes.bool,
    isHoverable: PropTypes.bool,
    hasDropdown: PropTypes.bool,
    tagName: PropTypes.string
};

NavbarItem.defaultProps = {
    ...HTMLComponent.defaultProps,
    isActive: false,
    isHoverable: false,
    hasDropdown: false,
    tagName: 'a'
};

NavbarItem.displayName = 'NavbarItem';

export default NavbarItem;
