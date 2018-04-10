import * as ClassNames from 'classnames';
import * as React from 'react';
import HTMLComponent, {HTMLHrProps} from '../../base/html/HTML';
import NavbarStyle from '../../bulma';

export type NavbarDividerProps = HTMLHrProps;

const NavbarDivider: React.SFC<NavbarDividerProps> = (props: NavbarDividerProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([
        NavbarStyle.navbarDivider,
        className
    ]);

    return (
        <hr className={classNames} {...inputProps}>
            {props.children}
        </hr>
    );
};

NavbarDivider.propTypes = HTMLComponent.propTypes;

NavbarDivider.defaultProps = HTMLComponent.defaultProps;

NavbarDivider.displayName = 'NavbarDivider';

export default NavbarDivider;
