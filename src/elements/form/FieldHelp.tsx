import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import {Color, colorValues} from "rebul/lib/base/css";
import HTMLComponent, {HTMLPProps} from "../../base/html/HTML";
import FormStyle from "./FormStyle";

/**
 * Refers Html Props and Additional Props.
 */
export interface FieldHelpProps extends HTMLPProps {
    color?: string | Color;
}

const FieldHelp: React.SFC<FieldHelpProps> = (props: FieldHelpProps) => {

    const {
        color,
        className,
        ...inputProps
    } = props;

    const classNames = ClassNames([
        FormStyle.help,
        FormStyle[color],
        className
    ]);

    return (
        <p className={classNames} {...inputProps} >
            {this.props.children}
        </p>
    );
};

FieldHelp.propTypes = {
    ...HTMLComponent.propTypes,
    color: PropTypes.oneOf(colorValues),
};

FieldHelp.defaultProps = HTMLComponent.defaultProps;

FieldHelp.displayName = "FieldHelp";

export default FieldHelp;
