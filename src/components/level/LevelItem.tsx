import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import HTMLComponent, {HTMLDivProps} from "../../base/html/HTML";
import LevelStyle from "./LevelStyle";

/**
 * Refers Html Props and Additional Props.
 */
export interface LevelItemProps extends HTMLDivProps {
    textCentered?: boolean;
}

const LevelItem: React.SFC<LevelItemProps> = (props: LevelItemProps) => {

    const {textCentered, className, ...inputProps} = props;

    const classNames = ClassNames([
        LevelStyle.levelItem,
        textCentered ? LevelStyle.hasTextCentered : undefined,
        className
    ]);

    return (
        <div className={classNames} {...inputProps} >
            {props.children}
        </div>
    );
};

LevelItem.propTypes = {
    ...HTMLComponent.propTypes,
    textCentered: PropTypes.bool
};

LevelItem.defaultProps = {
    ...HTMLComponent.defaultProps,
    textCentered: false
};

LevelItem.displayName = "LevelItem";

export default LevelItem;
