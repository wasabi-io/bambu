import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as ProgressStyle, Color, colorValues, HTMLComponent, HTMLProgressProps, Size, sizeValues} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface ProgressProps extends HTMLProgressProps {
    color?: string | Color;
    max: number;
    bSize?: string | Size;
    value: number;
}

const Progress: React.SFC<ProgressProps> = (props: ProgressProps) => {

    const {bSize, color, className, ...inputProps} = props;

    const classNames = ClassNames([
        ProgressStyle.progress,
        ProgressStyle[bSize],
        ProgressStyle[color],
        className
    ]);

    return (
        <progress className={classNames} {...inputProps} />
    );
};

Progress.propTypes = {
    ...HTMLComponent.propTypes,
    color: PropTypes.oneOf(colorValues),
    max: PropTypes.number,
    bSize: PropTypes.oneOf(sizeValues),
    value: PropTypes.number,
};

Progress.defaultProps = HTMLComponent.defaultProps;

Progress.displayName = 'Progress';

export default Progress;
