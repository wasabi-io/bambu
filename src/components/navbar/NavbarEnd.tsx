import * as ClassNames from "classnames";
import * as React from "react";
import HTMLComponent, {HTMLDivProps} from "../../base/html/HTML";
import NavbarStyle from "./NavbarStyle";

export type NavbarEndProps = HTMLDivProps;

const NavbarEnd: React.SFC<NavbarEndProps> = (props: NavbarEndProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([NavbarStyle.navbarEnd, className]);

    return (
        <div className={classNames} role="navigation" aria-label="main navigation" {...inputProps}>
            {props.children}
        </div>
    );
};

NavbarEnd.propTypes = HTMLComponent.propTypes;

NavbarEnd.defaultProps = HTMLComponent.defaultProps;

NavbarEnd.displayName = "NavbarEnd";

export default NavbarEnd;
