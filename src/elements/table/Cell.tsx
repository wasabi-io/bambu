import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as TableStyle, HTMLComponent, HTMLTdProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface CellProps extends HTMLTdProps {
    isIcon?: boolean;
}

export default class Cell extends React.Component<CellProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        isIcon: PropTypes.bool
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isIcon: false
    };

    public render(): JSX.Element {
        const {isIcon, className, children, ...cellProps} = this.props;

        const classNames = ClassNames(TableStyle.td, {[`${TableStyle.isIcon}`]: isIcon}, className);

        return (
            <td className={classNames} {...cellProps}>
                {children}
            </td>
        );
    }
}
