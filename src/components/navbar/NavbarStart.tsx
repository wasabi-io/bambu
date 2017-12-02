import * as ClassNames from "classnames";
import * as React from "react";
import HTMLComponent, {HTMLDivProps} from "../../base/html/HTML";
import NavbarStyle from "./NavbarStyle";

export type NavbarStartProps = HTMLDivProps;

const NavbarStart: React.SFC<NavbarStartProps> = (props: NavbarStartProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([NavbarStyle.navbarStart, className]);

    return (
        <div className={classNames} role="navigation" aria-label="main navigation" {...inputProps}>
            {props.children}
        </div>
    );
};

NavbarStart.propTypes = HTMLComponent.propTypes;

NavbarStart.defaultProps = HTMLComponent.defaultProps;

NavbarStart.displayName = "NavbarStart";

export default NavbarStart;
