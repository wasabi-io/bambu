import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as TableStyle, HTMLComponent, HTMLTrProps} from '../../';

export interface RowProps extends HTMLTrProps {
    isSelected?: boolean;
    elementRef?: any;
}

export default class Row extends React.Component<RowProps, {}> {
    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        isSelected: PropTypes.bool
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isSelected: false
    };

    public render(): JSX.Element {
        const {className, isSelected, children, elementRef, ...rowProps} = this.props;

        const classNames = ClassNames(TableStyle.tr, className, {[`${TableStyle.isSelected}`]: isSelected});

        return (
            <tr className={classNames} {...rowProps} ref={elementRef}>
                {children}
            </tr>
        );
    }
}
