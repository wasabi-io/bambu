import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import HTMLComponent, {HTMLTdProps} from "../../base/html/HTML";
import TableStyle from "./TableStyle";

/**
 * Refers Html Props and Additional Props.
 */
export interface CellProps extends HTMLTdProps {
    icon?: boolean;
}

const Cell: React.SFC<CellProps> = (props: CellProps) => {

    const {icon, className, ...inputProps} = props;

    const classNames = ClassNames([
        TableStyle.td,
        icon ? TableStyle.isIcon : undefined,
        className
    ]);

    return (
        <td
            className={classNames}
            {...inputProps}
        >
            {props.children}
        </td>
    );
};

Cell.propTypes = {
    ...HTMLComponent.propTypes,
    icon: PropTypes.bool
};

Cell.defaultProps = {
    ...HTMLComponent.defaultProps,
    icon: false
};

Cell.displayName = "Cell";

export default Cell;
