import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as TableStyle, HTMLComponent, HTMLTableProps} from '../../';

export interface TableProps extends HTMLTableProps {
    isBordered?: boolean;
    isStriped?: boolean;
    isNarrow?: boolean;
    isHoverable?: boolean;
    isFullwidth?: boolean;
}

const Table: React.SFC<TableProps> = (props: TableProps) => {

    const {isBordered, isStriped, isHoverable, isNarrow, isFullwidth, className, ...tableProps} = props;

    const classNames = ClassNames(
        TableStyle.table,
        className,
        {
            [`${TableStyle.isBordered}`]: isBordered,
            [`${TableStyle.isStriped}`]: isStriped,
            [`${TableStyle.isNarrow}`]: isNarrow,
            [`${TableStyle.isHoverable}`]: isHoverable,
            [`${TableStyle.isFullwidth}`]: isFullwidth,
        }
    );

    return (
        <table className={classNames} {...tableProps}>
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
    isFullwidth: PropTypes.bool,
};

Table.defaultProps = {
    ...HTMLComponent.defaultProps,
    isBordered: false,
    isNarrow: false,
    isStriped: false,
    isHoverable: false,
    isFullwidth: false,
};

Table.displayName = 'Table';

export default Table;
