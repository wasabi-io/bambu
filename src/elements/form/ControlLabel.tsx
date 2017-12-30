import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Size, SizeValues } from 'rebul/lib/base/css';

import HTMLComponent, { HTMLLabelProps } from '../../base/html/HTML';
import FormStyle from './FormStyle';

/**
 * Refers Html Props and Additional Props.
 */
export interface ControlLabelProps extends HTMLLabelProps {
    size?: string | Size;
}

const ControlLabel: React.SFC<ControlLabelProps> = (props: ControlLabelProps) => {

    const {
        size,
        className,
        ...inputProps
    } = props;

    const classNames = ClassNames([
        FormStyle.label,
        FormStyle[size],
        className
    ]);

    return (
        <label className={classNames} {...inputProps} >
            {props.children}
        </label>
    );
};

ControlLabel.propTypes = {
    ...HTMLComponent.propTypes,
    size: PropTypes.oneOf(SizeValues),
};

ControlLabel.defaultProps = HTMLComponent.defaultProps;

ControlLabel.displayName = "ControlLabel";

export default ControlLabel;
