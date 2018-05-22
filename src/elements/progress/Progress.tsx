import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as ProgressStyle, Color, colorValues, HTMLComponent, HTMLProgressProps, Size, sizeValues} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface ProgressProps extends HTMLProgressProps {
    color?: string | Color;
    max: number;
    bSize?: string | Size;
    value: number;
    elementRef?: (ref: any) => any;
}


export default class Progress extends React.Component<ProgressProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        color: PropTypes.oneOf(colorValues),
        max: PropTypes.number,
        bSize: PropTypes.oneOf(sizeValues),
        value: PropTypes.number,
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {bSize, color, className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames([
            ProgressStyle.progress,
            ProgressStyle[bSize],
            ProgressStyle[color],
            className
        ]);

        return (
            <progress className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </progress>
        );
    }
}

