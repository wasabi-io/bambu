import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import HTMLComponent, { HTMLTableProps } from '../../base/html/HTML';
import TableStyle from './TableStyle';

export interface TableProps extends HTMLTableProps {
    isBordered?: boolean;
    isNarrow?: boolean;
    isStriped?: boolean;
    isHoverable?: boolean;
}

const Table: React.SFC<TableProps> = (props: TableProps) => {

    const { isBordered, isStriped, isHoverable, isNarrow, className, ...inputProps } = props;

    const classNames = ClassNames([
        TableStyle.table,
        isBordered ? TableStyle.isBordered : undefined,
        isStriped ? TableStyle.isStriped : undefined,
        isNarrow ? TableStyle.isNarrow : undefined,
        isHoverable ? TableStyle.isHoverable : undefined,
        className
    ]);

    return (
        <table className={classNames} {...inputProps}>
            {props.children}
        </table>
    );
};

Table.propTypes = {
    ...HTMLComponent.propTypes,
    isBordered: PropTypes.bool,
    isNarrow: PropTypes.bool,
    isStriped: PropTypes.bool,
    isHoverable: PropTypes.bool,
};

Table.defaultProps = {
    ...HTMLComponent.defaultProps,
    isBordered: false,
    isNarrow: false,
    isStriped: false,
    isHoverable: false,
};

Table.displayName = "Table";

export default Table;
