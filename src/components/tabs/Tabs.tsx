import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import Objects from "wasabi-common/lib/types/Objects";
import TabsStyle from "rebul/lib/components/tabs/TabsStyle";
import {Alignment, AlignmentValues, Size, SizeValues} from "rebul/lib/base/css";
import HTMLComponent, {HTMLDivProps} from "../../base/html/HTML";

export enum tabsStyle { boxed = "isBoxed", toggle = "isToggle" }

export interface TabsProps extends HTMLDivProps {
    alignment?: string | Alignment;
    fullWidth?: boolean;
    size?: string | Size;
    tabStyle?: string | tabsStyle;
}

const Tabs: React.SFC<TabsProps> = (props: TabsProps) => {

    const {fullWidth, alignment, size, tabStyle, className, ...inputProps} = props;

    const classNames = ClassNames([
        TabsStyle.tabs,
        TabsStyle[alignment],
        TabsStyle[size],
        TabsStyle[tabStyle],
        fullWidth ? TabsStyle.isFullwidth : undefined,
        className
    ]);

    return (
        <div className={classNames} {...inputProps}>
            {props.children}
        </div>
    );
};

Tabs.propTypes = {
    ...HTMLComponent.propTypes,
    alignment: PropTypes.oneOf(AlignmentValues),
    fullWidth: PropTypes.bool,
    size: PropTypes.oneOf(SizeValues),
    tabStyle: PropTypes.oneOf(Objects.values(tabsStyle))
};

Tabs.defaultProps = {
    ...HTMLComponent.defaultProps,
    fullWidth: false,
};

Tabs.displayName = "Tabs";

export default Tabs;
