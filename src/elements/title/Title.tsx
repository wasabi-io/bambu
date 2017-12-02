import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import {Size6, Size6Values} from "../../base/css";
import HTMLComponent, {HTMLPProps} from "../../base/html/HTML";
import TitleStyle from "./TitleStyle";

/**
 * Refers Html Props and Additional Props.
 */
export interface TitleProps extends HTMLPProps {
    size?: string | Size6;
}

const Title: React.SFC<TitleProps> = (props: TitleProps) => {

    const {size, className, ...inputProps} = props;

    const classNames = ClassNames([
        TitleStyle.title,
        TitleStyle[size],
        className
    ]);

    return (
        <p className={classNames} {...inputProps} >
            {props.children}
        </p>
    );
};

Title.propTypes = {
    ...HTMLComponent.propTypes,
    size: PropTypes.oneOf(Size6Values),
};

Title.defaultProps = HTMLComponent.defaultProps;

Title.displayName = "Title";

export default Title;
