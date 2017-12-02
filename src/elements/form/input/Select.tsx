import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import {Color, colorValues, Size, SizeValues} from "rebul/lib/base/css";
import {State, StateValues} from "rebul/lib/base/css/state";
import HTMLComponent, {HTMLDivProps} from "../../../base/html/HTML";
import FormStyle from "../FormStyle";

/**
 * Refers Html Props and Additional Props.
 */
export interface SelectProps extends HTMLDivProps {
    color?: string | Color;
    isMultiple: boolean;
    size?: string | Size;
    state?: string | State;
}

const Select: React.SFC<SelectProps> = (props: SelectProps) => {

    const {
        color,
        size,
        state,
        className,
        ...inputProps
    } = props;

    const classNames = ClassNames([
        FormStyle.select,
        FormStyle[color],
        FormStyle[size],
        FormStyle[state],
        className
    ]);

    return (
        <div className={classNames} {...inputProps} >
            <select>
                {this.props.children}
            </select>
        </div>
    );
};

Select.propTypes = {
    ...HTMLComponent.propTypes,
    color: PropTypes.oneOf(colorValues),
    isMultiple: PropTypes.bool,
    size: PropTypes.oneOf(SizeValues),
    state: PropTypes.oneOf(StateValues),
};

Select.defaultProps = {
    ...HTMLComponent.defaultProps,
    isMultiple: false,
};

Select.displayName = "Select";

export default Select;
