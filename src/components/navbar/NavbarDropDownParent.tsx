import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Strings from 'wasabi-common/lib/types/Strings';

import NavbarStyle from '../../base/css/bulma';
import HTMLComponent, { HTMLDivProps } from '../../base/html/HTML';

export enum ShowingState {
    active = 'active',
    hoverable = 'hoverable'
}

export interface NavbarDropdownParentProps extends HTMLDivProps {
    isActive?: boolean;
    hasDropdownUp?: boolean;
    state?: ShowingState;
}

const NavbarDropdownParent: React.SFC<NavbarDropdownParentProps> = (props: NavbarDropdownParentProps) => {

    const { isActive, hasDropdownUp, state, className, ...inputProps } = props;

    const classNames = ClassNames(
        NavbarStyle.navbarItem,
        NavbarStyle.hasDropdown,
        {
            [`${NavbarStyle.isActive}`]: isActive,
            [`${NavbarStyle.hasDropdownUp}`]: hasDropdownUp,
            [`${NavbarStyle[`is${Strings.capitalizeFirstLetter(state)}`]}`]: Strings.has(state),
        },
        className
    );

    return (
        <div className={classNames} {...inputProps}>
            {props.children}
        </div>
    );
};

NavbarDropdownParent.propTypes = {
    ...HTMLComponent.propTypes,
    isActive: PropTypes.bool,
    hasDropdownUp: PropTypes.bool
};

NavbarDropdownParent.defaultProps = {
    ...HTMLComponent.defaultProps,
    isActive: false,
    hasDropdownUp: false
};

NavbarDropdownParent.displayName = 'NavbarDropdownParent';

export default NavbarDropdownParent;
