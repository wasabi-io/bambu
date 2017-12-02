import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import {Size6, Size6Values} from "../../base/css";
import HTMLComponent, {HTMLPProps} from "../../base/html/HTML";
import TitleStyle from "./TitleStyle";

/**
 * Refers Html Props and Additional Props.
 */
export interface SubTitleProps extends HTMLPProps {
    size?: string | Size6;
}

const SubTitle: React.SFC<SubTitleProps> = (props: SubTitleProps) => {

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

SubTitle.propTypes = {
    ...HTMLComponent.propTypes,
    size: PropTypes.oneOf(Size6Values),
};

SubTitle.defaultProps = HTMLComponent.defaultProps;

SubTitle.displayName = "SubTitle";

export default SubTitle;
