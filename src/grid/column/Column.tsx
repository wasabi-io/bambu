import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import HTMLComponent, {HTMLDivProps} from '../../base/html/HTML';
import ColumnsStyle from '../../base/css/bulma';

/**
 * Refers Html Props and Additional Props.
 */
export interface ColumnProps extends HTMLDivProps {
    isNarrow?: boolean;
    size?: string;
    offset?: string;
}

const Column: React.SFC<ColumnProps> = (props: ColumnProps) => {

    const {isNarrow, size, offset, className, ...inputProps} = props;

    const classNames = ClassNames(
        ColumnsStyle.column,
        ColumnsStyle[size],
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
    size: PropTypes.string,
};

Column.defaultProps = {
    ...HTMLComponent.defaultProps,
    isNarrow: false,
};

Column.displayName = 'Column';

export default Column;
