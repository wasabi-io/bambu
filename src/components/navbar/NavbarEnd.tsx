import * as ClassNames from 'classnames';
import * as React from 'react';
import HTMLComponent, {HTMLDivProps} from '../../base/html/HTML';
import NavbarStyle from '../../base/css/bulma';

export type NavbarEndProps = HTMLDivProps;

const NavbarEnd: React.SFC<NavbarEndProps> = (props: NavbarEndProps) => {

    const {className, ...navbarEndProps} = props;

    const classNames = ClassNames(NavbarStyle.navbarEnd, className);

    return (
        <div className={classNames} {...navbarEndProps}>
            {props.children}
        </div>
    );
};

NavbarEnd.propTypes = HTMLComponent.propTypes;

NavbarEnd.defaultProps = HTMLComponent.defaultProps;

NavbarEnd.displayName = 'NavbarEnd';

export default NavbarEnd;
