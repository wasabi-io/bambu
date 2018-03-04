import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import ControlLabel, { ControlLabelProps } from 'rebul/lib/elements/form/ControlLabel';
import Objects from 'wasabi-common/lib/types/Objects';

import HTMLComponent, { HTMLDivProps } from '../../base/html/HTML';
import FormStyle from './FormStyle';

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
  size?: string | FieldLabelSize;
  labelProps?: ControlLabelProps;
}

const FieldLabel: React.SFC<FieldLabelProps> = (props: FieldLabelProps) => {

  const {
    size,
    className,
    labelProps,
    ...inputProps
  } = props;

  const classNames = ClassNames([
    FormStyle.fieldLabel,
    FormStyle[size],
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
  size: PropTypes.oneOf(Objects.values(FieldLabelSize)),
};

FieldLabel.defaultProps = {
  ...HTMLComponent.defaultProps,
  size: FieldLabelSize.normal
};

FieldLabel.displayName = 'FieldLabel';

export default FieldLabel;
