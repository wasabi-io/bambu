import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Strings from 'wasabi-common/lib/types/Strings';
import HTMLComponent, {HTMLDivProps} from '../../base/html/HTML';
import NavbarStyle from '../../bulma';

export enum ShowingState {
    active = 'active',
    hoverable = 'hoverable'
}

export interface NavbarDropdownParentProps extends HTMLDivProps {
    active?: boolean;
    up?: boolean;
    state?: ShowingState;
}

const NavbarDropdownParent: React.SFC<NavbarDropdownParentProps> = (props: NavbarDropdownParentProps) => {

    const {active, up, state, className, ...inputProps} = props;

    const showSateClassName = Strings.has(state) ? NavbarStyle[`is${Strings.capitalizeFirstLetter(state)}`] : undefined;

    const classNames = ClassNames([
        NavbarStyle.navbarItem,
        NavbarStyle.hasDropdown,
        active ? NavbarStyle.isActive : undefined,
        up ? NavbarStyle.hasDropdownUp : undefined,
        showSateClassName,
        className
    ]);

    return (
        <div className={classNames} {...inputProps}>
            {props.children}
        </div>
    );
};

NavbarDropdownParent.propTypes = {
    ...HTMLComponent.propTypes,
    active: PropTypes.bool,
    up: PropTypes.bool
};

NavbarDropdownParent.defaultProps = {
    ...HTMLComponent.defaultProps,
    active: false,
    up: false
};

NavbarDropdownParent.displayName = 'NavbarDropdownParent';

export default NavbarDropdownParent;
