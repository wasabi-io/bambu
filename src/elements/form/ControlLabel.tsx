import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Size, sizeValues, HTMLComponent, HTMLLabelProps, bulma as FormStyle} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface ControlLabelProps extends HTMLLabelProps {
    bSize?: string | Size;
    isRadio?: boolean;
}

const ControlLabel: React.SFC<ControlLabelProps> = (props: ControlLabelProps) => {

    const {
        bSize,
        className,
        isRadio,
        ...inputProps
    } = props;

    const classNames = ClassNames(
        {
            [`${FormStyle.label}`]: !isRadio,
            [`${FormStyle.radio}`]: isRadio,
        },
        FormStyle[bSize],
        className
    );

    return (
        <label className={classNames} {...inputProps} >
            {props.children}
        </label>
    );
};

ControlLabel.propTypes = {
    ...HTMLComponent.propTypes,
    bSize: PropTypes.oneOf(sizeValues),
    isRadio: PropTypes.bool
};

ControlLabel.defaultProps = {
    ...HTMLComponent.defaultProps,
    isRadio: false
};

ControlLabel.displayName = 'ControlLabel';

export default ControlLabel;
