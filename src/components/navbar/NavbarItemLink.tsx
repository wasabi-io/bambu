import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import HTMLComponent, {HTMLAllAttributes} from '../../base/html/HTML';
import NavbarStyle from '../../bulma';

export interface NavbarItemLinkProps extends HTMLAllAttributes {
    isActive?: boolean;
}

const NavbarItemLink: React.SFC<NavbarItemLinkProps> = (props: NavbarItemLinkProps) => {

    const {isActive, className, ...inputProps} = props;

    const classNames = ClassNames([NavbarStyle.navbarItem, isActive ? NavbarStyle.isActive : undefined, className]);

    return (
        <a className={classNames} {...inputProps}>
            {props.children}
        </a>
    );
};

NavbarItemLink.propTypes = {
    ...HTMLComponent.propTypes,
    isActive: PropTypes.bool
};

NavbarItemLink.defaultProps = {
    ...HTMLComponent.defaultProps,
    isActive: false
};

NavbarItemLink.displayName = 'NavbarItemLink';

export default NavbarItemLink;
