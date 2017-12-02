import * as ClassNames from "classnames";
import * as React from "react";
import HTMLComponent, {HTMLTheadProps} from "../../base/html/HTML";
import TableStyle from "./TableStyle";

/**
 * Refers Html Props and Additional Props.
 */
export type THeadProps = HTMLTheadProps;

const THead: React.SFC<THeadProps> = (props: THeadProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([
        TableStyle.tr,
        className
    ]);

    return (
        <thead className={classNames} {...inputProps} >
        {props.children}
        </thead>
    );
};

THead.propTypes = HTMLComponent.propTypes;

THead.defaultProps = HTMLComponent.defaultProps;

THead.displayName = "THead";

export default THead;
