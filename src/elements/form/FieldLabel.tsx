import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import ControlLabel, {ControlLabelProps} from '../../elements/form/ControlLabel';
import Objects from 'wasabi-common/lib/types/Objects';
import {bulma as FormStyle, HTMLComponent, HTMLDivProps} from '../../';

export enum FieldLabelSize {
    normal = 'isNormal',
    small = 'isSmall',
    medium = 'isMedium',
    large = 'isLarge'
}

/**
 * Refers Html Props and Additional Props.
 */
export interface FieldLabelProps extends HTMLDivProps {
    bSize?: string | FieldLabelSize;
    labelProps?: ControlLabelProps;
}

const FieldLabel: React.SFC<FieldLabelProps> = (props: FieldLabelProps) => {

    const {
        bSize,
        className,
        labelProps,
        ...inputProps
    } = props;

    const classNames = ClassNames([
        FormStyle.fieldLabel,
        FormStyle[bSize],
        className
    ]);

    return (
        <div className={classNames} {...inputProps} >
            <ControlLabel {...labelProps}>
                {props.children}
            </ControlLabel>
        </div>
    );
};

FieldLabel.propTypes = {
    ...HTMLComponent.propTypes,
    bSize: PropTypes.oneOf(Objects.values(FieldLabelSize)),
    labelProps: PropTypes.object
};

FieldLabel.defaultProps = {
    ...HTMLComponent.defaultProps,
    bSize: FieldLabelSize.normal
};

FieldLabel.displayName = 'FieldLabel';

export default FieldLabel;
