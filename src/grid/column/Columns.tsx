import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Objects, Props} from "wasabi-common";
import {bulma as ColumnsStyle, HTMLComponent, HTMLDivProps, Responsive} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface ColumnsProps extends HTMLDivProps {
    isMultiline?: boolean;
    isVcentered?: boolean;
    isGapless?: boolean;
    responsive?: string | Responsive;
    elementRef?: (ref: any) => any;
}


export default class Columns extends React.Component<ColumnsProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        isGapless: PropTypes.bool,
        isMultiline: PropTypes.bool,
        responsive: PropTypes.oneOf(Objects.values(Responsive)),
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isGapless: false,
        isMultiline: false,
    };

    public render(): JSX.Element {
        const {responsive, isMultiline, isVcentered, isGapless, className, children, elementRef, ...inputProps} = this.props;
        const classNames = ClassNames(
            ColumnsStyle.columns,
            ColumnsStyle[responsive],
            {
                [`${ColumnsStyle.isMultiline}`]: isMultiline,
                [`${ColumnsStyle.isVcentered}`]: isVcentered,
                [`${ColumnsStyle.isGapless}`]: isGapless
            },
            className,
        );

        return (
            <div className={classNames} {...inputProps} ref={elementRef} >
                {children}
            </div>
        );
    }
}
