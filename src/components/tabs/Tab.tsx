import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import HTMLComponent, {HTMLDivProps} from "../../base/html/HTML";
import TabsStyle from "./TabsStyle";

export interface TabProps extends HTMLDivProps {
    active?: boolean;
}

const Tab: React.SFC<TabProps> = (props: TabProps) => {

    const {active, className, ...inputProps} = props;

    const classNames = ClassNames([
        active ? TabsStyle.isActive : undefined,
        className
    ]);

    return (
        <div className={classNames} {...inputProps}>
            {props.children}
        </div>
    );
};

Tab.propTypes = {
    ...HTMLComponent.propTypes,
    active: PropTypes.bool
};

Tab.defaultProps = {
    ...HTMLComponent.defaultProps,
    active: false,
};

Tab.displayName = "Tab";

export default Tab;
