import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Color, colorValues, Size, SizeValues} from '../../base/css';
import HTMLComponent, {HTMLProgressProps} from '../../base/html/HTML';
import ProgressStyle from '../../bulma';

/**
 * Refers Html Props and Additional Props.
 */
export interface ProgressProps extends HTMLProgressProps {
    color?: string | Color;
    max: number;
    size?: string | Size;
    value: number;
}

const Progress: React.SFC<ProgressProps> = (props: ProgressProps) => {

    const {size, color, className, ...inputProps} = props;

    const classNames = ClassNames([
        ProgressStyle.progress,
        ProgressStyle[size],
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
    size: PropTypes.oneOf(SizeValues),
    value: PropTypes.number,
};

Progress.defaultProps = HTMLComponent.defaultProps;

Progress.displayName = 'Progress';

export default Progress;
