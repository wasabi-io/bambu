import * as ClassNames from "classnames";
import * as React from "react";
import HTMLComponent, {HTMLTrProps} from "../../base/html/HTML";
import TableStyle from "./TableStyle";

/**
 * Refers Html Props and Additional Props.
 */
export type RowProps = HTMLTrProps;

const Row: React.SFC<RowProps> = (props: RowProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([
        TableStyle.tr,
        className
    ]);

    return (
        <tr className={classNames} {...inputProps} >
            {props.children}
        </tr>
    );
};

Row.propTypes = HTMLComponent.propTypes;

Row.defaultProps = HTMLComponent.defaultProps;

Row.displayName = "Row";

export default Row;
