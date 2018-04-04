import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import HTMLComponent, {HTMLDivProps} from '../../base/html/HTML';
import NavbarStyle from './NavbarStyle';

export interface NavbarDropdownProps extends HTMLDivProps {
    active?: boolean;
    boxed?: boolean;
    right?: boolean;
}

const NavbarDropdown: React.SFC<NavbarDropdownProps> = (props: NavbarDropdownProps) => {

    const {active, boxed, right, className, ...inputProps} = props;

    const classNames = ClassNames([
        NavbarStyle.navbarDropdown,
        active ? NavbarStyle.isActive : undefined,
        boxed ? NavbarStyle.isBoxed : undefined,
        right ? NavbarStyle.isRight : undefined,
        className
    ]);

    return (
        <div className={classNames} {...inputProps}>
            {props.children}
        </div>
    );
};

NavbarDropdown.propTypes = {
    ...HTMLComponent.propTypes,
    active: PropTypes.bool,
    boxed: PropTypes.bool,
    right: PropTypes.bool
};

NavbarDropdown.defaultProps = {
    ...HTMLComponent.defaultProps,
    active: false,
    boxed: false,
    right: false
};

NavbarDropdown.displayName = 'NavbarDropdown';

export default NavbarDropdown;
