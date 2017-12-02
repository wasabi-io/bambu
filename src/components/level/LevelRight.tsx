import * as ClassNames from "classnames";
import * as React from "react";
import LevelStyle from "rebul/lib/components/level/LevelStyle";
import HTMLComponent, {HTMLDivProps} from "../../base/html/HTML";

export type LevelRightProps = HTMLDivProps;

const LevelRight: React.SFC<LevelRightProps> = (props: LevelRightProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([
        LevelStyle.levelRight,
        className
    ]);

    return (
        <div {...inputProps} className={classNames}>
            {props.children}
        </div>
    );
};

LevelRight.propTypes = HTMLComponent.propTypes;

LevelRight.defaultProps = HTMLComponent.defaultProps;

LevelRight.displayName = "LevelRight";
