import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import HTMLComponent, {HTMLTableProps} from "../../base/html/HTML";
import TableStyle from "./TableStyle";

/**
 * Refers Html Props and Additional Props.
 */
export interface TableProps extends HTMLTableProps {
    bordered?: boolean;
    narrow?: boolean;
    striped?: boolean;
}

const Table: React.SFC<TableProps> = (props: TableProps) => {

    const {bordered, striped, narrow, className, ...inputProps} = props;

    const classNames = ClassNames([
        TableStyle.table,
        bordered ? TableStyle.isBordered : undefined,
        striped ? TableStyle.isStriped : undefined,
        narrow ? TableStyle.isNarrow : undefined,
        className
    ]);

    return (
        <table
            className={classNames}
            {...inputProps}
        >
            {props.children}
        </table>
    );
};

Table.propTypes = {
    ...HTMLComponent.propTypes,
    bordered: PropTypes.bool,
    narrow: PropTypes.bool,
    striped: PropTypes.bool,
};

Table.defaultProps = {
    ...HTMLComponent.defaultProps,
    bordered: false,
    narrow: false,
    striped: false,
};

Table.displayName = "Table";

export default Table;
