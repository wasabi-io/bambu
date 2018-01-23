import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Size, SizeValues } from 'rebul/lib/base/css';
import HTMLComponent, { HTMLLabelProps } from '../../base/html/HTML';
import FormStyle from './FormStyle';

/**
 * Refers Html Props and Additional Props.
 */
export interface FieldBodyProps extends HTMLLabelProps {
  size?: string | Size;
}

const FieldBody: React.SFC<FieldBodyProps> = (props: FieldBodyProps) => {

  const {
        size,
    className,
    ...inputProps
    } = props;

  const classNames = ClassNames([
    FormStyle.fieldBody,
    FormStyle[size],
    className
  ]);

  return (
    <label className={classNames} {...inputProps} >
      {this.props.children}
    </label>
  );
};

FieldBody.propTypes = {
  ...HTMLComponent.propTypes,
  size: PropTypes.oneOf(SizeValues),
};

FieldBody.defaultProps = HTMLComponent.defaultProps;

FieldBody.displayName = 'FieldBody';

export default FieldBody;
