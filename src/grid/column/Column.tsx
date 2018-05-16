import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as ColumnsStyle, HTMLComponent, HTMLDivProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface ColumnProps extends HTMLDivProps {
    isNarrow?: boolean;
    bSize?: string;
    offset?: string;
    elementRef?: any;
}

export default class Column extends React.Component<ColumnProps, {}> {
    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        isNarrow: PropTypes.bool,
        offset: PropTypes.string,
        bSize: PropTypes.string,
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isNarrow: false,
    };

    public render(): JSX.Element {
        const {isNarrow, bSize, offset, className, children, elementRef, ...inputProps} = this.props;

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
            <div className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}
