import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {has} from "wasabi-common";
import {bulma as ColumnsStyle, HTMLComponent, HTMLDivProps} from '../../';
import Objects from "wasabi-common/lib/types/Objects";

export enum ColumnSize {
    isThreeQuarters = "is-three-quarters",
    isTwoThirds = "is-two-thirds",
    isHalf = "is-half",
    isOneThird = "is-one-third",
    isOneQuarter = "is-one-quarter",
    isFourFifths = "is-four-fifths",
    isThreeFifths = "is-three-fifths",
    isTwoFifths = "is-two-fifths",
    isOneFifth = "is-one-fifth"
}

const columnSizeValues = Objects.values(ColumnSize);

export type RowSpan = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

/**
 * Refers Html Props and Additional Props.
 */
export interface ColumnProps extends HTMLDivProps {
    isNarrow?: boolean;
    bSize?: string | ColumnSize;
    rowSpan?: RowSpan;
    offset?: string;
    elementRef?: (ref: any) => any;
}

export default class Column extends React.Component<ColumnProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        isNarrow: PropTypes.bool,
        offset: PropTypes.string,
        bSize: PropTypes.oneOf(columnSizeValues),
        rowSpan: PropTypes.number
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isNarrow: false,
    };

    public render(): JSX.Element {
        const {isNarrow, bSize, rowSpan, offset, className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames(
            ColumnsStyle.column,
            ColumnsStyle[bSize],
            ColumnsStyle[offset],
            {
                [`${ColumnsStyle['is-' + rowSpan]}`]: has(rowSpan),
                [`${ColumnsStyle.isNarrow}`]: isNarrow,
            },
            className,
        );

        return (
            <div className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}
