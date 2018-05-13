import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as ColumnsStyle, HTMLComponent, HTMLDivProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface ColumnProps extends HTMLDivProps {
    isNarrow?: boolean;
    bSize?: string;
    offset?: string;
}

const Column: React.SFC<ColumnProps> = (props: ColumnProps) => {

    const {isNarrow, bSize, offset, className, ...inputProps} = props;

    const classNames = ClassNames(
        ColumnsStyle.column,
        ColumnsStyle[bSize],
        ColumnsStyle[offset],
        {
            [`${ColumnsStyle.isNarrow}`]: isNarrow,
        },
        className,
    );

    return (
        <div className={classNames} {...inputProps} >
            {props.children}
        </div>
    );
};

Column.propTypes = {
    ...HTMLComponent.propTypes,
    isNarrow: PropTypes.bool,
    offset: PropTypes.string,
    bSize: PropTypes.string,
};

Column.defaultProps = {
    ...HTMLComponent.defaultProps,
    isNarrow: false,
};

Column.displayName = 'Column';

export default Column;
