import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import NavbarStyle from '../../base/css/bulma';
import HTMLComponent, { HTMLDivProps } from '../../base/html/HTML';

export interface NavbarBrandProps extends HTMLDivProps {
    hasShadow?: boolean;
}

const NavbarBrand: React.SFC<NavbarBrandProps> = (props: NavbarBrandProps) => {

    const { hasShadow, className, ...inputProps } = props;

    const classNames = ClassNames(
        NavbarStyle.navbarBrand,
        {
            [`${NavbarStyle.hasShadow}`]: hasShadow
        },
        className
    );

    return (
        <div className={classNames} {...inputProps}>
            {props.children}
        </div>
    );
};

NavbarBrand.propTypes = {
    ...HTMLComponent.propTypes,
    hasShadow: PropTypes.bool
};

NavbarBrand.defaultProps = {
    ...HTMLComponent.defaultProps,
    hasShadow: false,
};

NavbarBrand.displayName = 'NavbarBrand';

export default NavbarBrand;
