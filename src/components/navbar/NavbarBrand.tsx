import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import HTMLComponent, {HTMLDivProps} from '../../base/html/HTML';
import NavbarStyle from '../../bulma';

export interface NavbarBrandProps extends HTMLDivProps {
    hasShadow?: boolean;
}

const NavbarBrand: React.SFC<NavbarBrandProps> = (props: NavbarBrandProps) => {

    const {hasShadow, className, ...inputProps} = props;

    const classNames = ClassNames([
        NavbarStyle.navbarBrand,
        hasShadow ? NavbarStyle.hasShadow : undefined,
        className
    ]);

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
