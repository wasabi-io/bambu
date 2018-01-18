import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import HTMLComponent, { HTMLTdProps } from '../../base/html/HTML';
import TableStyle from './TableStyle';

/**
 * Refers Html Props and Additional Props.
 */
export interface CellProps extends HTMLTdProps {
    isIcon?: boolean;
}

const Cell: React.SFC<CellProps> = (props: CellProps) => {

    const { isIcon, className, ...cellProps } = props;

    const classNames = ClassNames(
        TableStyle.td,
        {
            [`${TableStyle.isIcon}`]: isIcon,
        },
        className
    );

    return (
        <td className={classNames} {...cellProps}>
            {props.children}
        </td>
    );
};

Cell.propTypes = {
    ...HTMLComponent.propTypes,
    isIcon: PropTypes.bool
};

Cell.defaultProps = {
    ...HTMLComponent.defaultProps,
    isIcon: false
};

Cell.displayName = "Cell";

export default Cell;
