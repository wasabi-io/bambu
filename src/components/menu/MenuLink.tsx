import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import HTMLComponent, {HTMLAProps} from '../../base/html/HTML';
import MenuStyle from '../../bulma';

export interface MenuLinkProps extends HTMLAProps {
    active?: boolean;
    href?: string;
}

const MenuLink: React.SFC<MenuLinkProps> = (props: MenuLinkProps) => {

    const {active, className, ...inputProps} = props;

    const classNames = ClassNames([active ? MenuStyle.isActive : undefined, className]);

    return (
        <a className={classNames} {...inputProps}>
            {props.children}
        </a>
    );
};

MenuLink.propTypes = {
    ...HTMLComponent.propTypes,
    active: PropTypes.bool,
    href: PropTypes.string
};

MenuLink.defaultProps = {
    ...HTMLComponent.defaultProps,
    active: false
};

MenuLink.displayName = 'MenuLink';

export default MenuLink;
