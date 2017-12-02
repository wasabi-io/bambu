import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import {Color, colorValues, Size, SizeValues} from "../../base/css";
import HTMLComponent, {HTMLSpanProps} from "../../base/html/HTML";
import TagStyle from "./TagStyle";

/**
 * Refers Html Props and Additional Props.
 */
export interface TagProps extends HTMLSpanProps {
    color?: string | Color;
    size?: string | Size;
}

const Tag: React.SFC<TagProps> = (props: TagProps) => {

    const {size, color, className, ...inputProps} = props;

    const classNames = ClassNames([
        TagStyle.tag,
        TagStyle[size],
        TagStyle[color],
        className
    ]);

    return (
        <span className={classNames} {...inputProps}>
            {props.children}
        </span>
    );
};

Tag.propTypes = {
    ...HTMLComponent.propTypes,
    color: PropTypes.oneOf(colorValues),
    size: PropTypes.oneOf(SizeValues)
};

Tag.defaultProps = HTMLComponent.defaultProps;

Tag.displayName = "Tag";

export default Tag;
