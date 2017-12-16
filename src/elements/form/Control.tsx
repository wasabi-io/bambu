import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import HTMLComponent, { HTMLDivProps } from "../../base/html/HTML";
import FormStyle from "./FormStyle";

/**
 * Refers Html Props and Additional Props.
 */
export interface ControlProps extends HTMLDivProps {
    hasIconsLeft?: boolean;
    hasIconsRight?: boolean;
    isExpanded?: boolean;
}

const Control: React.SFC<ControlProps> = (props: ControlProps) => {

    const {
        isExpanded,
        hasIconsLeft,
        hasIconsRight,
        className,
        ...inputProps
    } = props;

    const classNames = ClassNames([
        FormStyle.control,
        isExpanded ? FormStyle.isExpanded : undefined,
        hasIconsLeft ? FormStyle.hasIconsLeft : undefined,
        hasIconsRight ? FormStyle.hasIconsRight : undefined,
        className
    ]);

    return (
        <div className={classNames} {...inputProps} >
            {this.props.children}
        </div>
    );
};

Control.propTypes = {
    ...HTMLComponent.propTypes,
    hasIconsLeft: PropTypes.bool,
    hasIconsRight: PropTypes.bool,
    isExpanded: PropTypes.bool,
};

Control.defaultProps = {
    ...HTMLComponent.defaultProps,
    hasIconsLeft: false,
    hasIconsRight: false,
    isExpanded: false,
};

Control.displayName = "Control";

export default Control;
