import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as TableStyle, HTMLComponent, HTMLThProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface HCellProps extends HTMLThProps {
    elementRef?: (ref: any) => any;
}

export default class HCell extends React.Component<HCellProps, {}> {
    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...hCellProps} = this.props;

        const classNames = ClassNames(TableStyle.th, className);

        return (
            <th className={classNames} {...hCellProps} ref={elementRef}>
                {children}
            </th>
        );
    }
}
