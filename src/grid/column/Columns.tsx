import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Objects from 'wasabi-common/lib/types/Objects';

import { Responsive } from '../../base/css';
import HTMLComponent, { HTMLDivProps } from '../../base/html/HTML';
import ColumnsStyle from './ColumnStyle';

/**
 * Refers Html Props and Additional Props.
 */
export interface ColumnsProps extends HTMLDivProps {
    isMultiline?: boolean;
    isVcentered?: boolean;
    isGapless?: boolean;
    responsive?: string | Responsive;
}

const Columns: React.SFC<ColumnsProps> = (props: ColumnsProps) => {

    const { responsive, isMultiline, isVcentered, isGapless, className, ...inputProps } = props;

    const classNames = ClassNames(
        ColumnsStyle.columns,
        ColumnsStyle[responsive],
        {
            [`${ColumnsStyle.isMultiline}`]: isMultiline,
            [`${ColumnsStyle.isVcentered}`]: isVcentered,
            [`${ColumnsStyle.isGapless}`]: isGapless,
        },
        className,
    );

    return (
        <div className={classNames} {...inputProps} >
            {props.children}
        </div>
    );
};

Columns.propTypes = {
    ...HTMLComponent.propTypes,
    isGapless: PropTypes.bool,
    isMultiline: PropTypes.bool,
    responsive: PropTypes.oneOf(Objects.values(Responsive)),
};

Columns.defaultProps = {
    ...HTMLComponent.defaultProps,
    isGapless: false,
    isMultiline: false,
};

Columns.displayName = "Columns";

export default Columns;
