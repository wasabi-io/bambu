import * as ClassNames from "classnames";
import * as React from "react";
import HTMLComponent, {HTMLDivProps} from "../../base/html/HTML";
import LevelStyle from "./LevelStyle";

export type LevelLeftProps = HTMLDivProps;

const LevelLeft: React.SFC<LevelLeftProps> = (props: LevelLeftProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([
        LevelStyle.levelLeft,
        className
    ]);

    return (
        <div className={classNames} {...inputProps}>
            {props.children}
        </div>
    );
};

LevelLeft.propTypes = HTMLComponent.propTypes;

LevelLeft.defaultProps = HTMLComponent.defaultProps;

LevelLeft.displayName = "LevelLeft";
