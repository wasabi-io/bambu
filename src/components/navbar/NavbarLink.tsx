import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import HTMLComponent, {HTMLAProps} from '../../base/html/HTML';
import NavbarStyle from '../../bulma';

export interface NavbarLinkProps extends HTMLAProps {
    href?: string;
}

const NavbarLink: React.SFC<NavbarLinkProps> = (props: NavbarLinkProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([
        NavbarStyle.navbarLink,
        className
    ]);

    return (
        <a className={classNames} {...inputProps}>
            {props.children}
        </a>
    );
};

NavbarLink.propTypes = {
    ...HTMLComponent.propTypes,
    href: PropTypes.string
};

NavbarLink.defaultProps = {
    ...HTMLComponent.defaultProps
};

NavbarLink.displayName = 'NavbarLink';

export default NavbarLink;
