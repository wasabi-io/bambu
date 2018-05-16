import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as TableStyle, HTMLComponent, HTMLTableProps} from '../../';

export interface TableProps extends HTMLTableProps {
    isBordered?: boolean;
    isStriped?: boolean;
    isNarrow?: boolean;
    isHoverable?: boolean;
    isFullwidth?: boolean;
    elementRef?: any;
}


export default class Table extends React.Component<TableProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        isBordered: PropTypes.bool,
        isNarrow: PropTypes.bool,
        isStriped: PropTypes.bool,
        isHoverable: PropTypes.bool,
        isFullwidth: PropTypes.bool,
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isBordered: false,
        isNarrow: false,
        isStriped: false,
        isHoverable: false,
        isFullwidth: false,
    };

    public render(): JSX.Element {
        const {isBordered, isStriped, isHoverable, isNarrow, isFullwidth, className, children, elementRef, ...tableProps} = this.props;

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
            <table className={classNames} {...tableProps} ref={elementRef}>
                {children}
            </table>
        );
    }
}

