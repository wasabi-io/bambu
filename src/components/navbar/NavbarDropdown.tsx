import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import NavbarStyle from '../../base/css/bulma';
import HTMLComponent, { HTMLDivProps } from '../../base/html/HTML';

export interface NavbarDropdownProps extends HTMLDivProps {
    isActive?: boolean;
    isBoxed?: boolean;
    isRight?: boolean;
}

const NavbarDropdown: React.SFC<NavbarDropdownProps> = (props: NavbarDropdownProps) => {

    const { isActive, isBoxed, isRight, className, ...inputProps } = props;

    const classNames = ClassNames(
        NavbarStyle.navbarDropdown,
        {
            [`${NavbarStyle.isActive}`]: isActive,
            [`${NavbarStyle.isBoxed}`]: isBoxed,
            [`${NavbarStyle.isRight}`]: isRight,
        },
        className
    );

    return (
        <div className={classNames} {...inputProps}>
            {props.children}
        </div>
    );
};

NavbarDropdown.propTypes = {
    ...HTMLComponent.propTypes,
    isActive: PropTypes.bool,
    isBoxed: PropTypes.bool,
    isRight: PropTypes.bool
};

NavbarDropdown.defaultProps = {
    ...HTMLComponent.defaultProps,
    isActive: false,
    isBoxed: false,
    isRight: false
};

NavbarDropdown.displayName = 'NavbarDropdown';

export default NavbarDropdown;
