import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import HTMLComponent, { HTMLDivProps } from '../../base/html/HTML';
import ColumnsStyle from './ColumnStyle';

/**
 * Refers Html Props and Additional Props.
 */
export interface ColumnProps extends HTMLDivProps {
  isMultiline?: boolean;
  size?: string;
  offset?: string;
}

const Column: React.SFC<ColumnProps> = (props: ColumnProps) => {

  const { isMultiline, size, offset, className, ...inputProps } = props;

  const classNames = ClassNames(
    ColumnsStyle.column,
    ColumnsStyle[size],
    ColumnsStyle[offset],
    {
      [`${ColumnsStyle.isMultiline}`]: isMultiline,
    },
    className,
  );

  return (
    <div className={classNames} {...inputProps} >
      {props.children}
    </div>
  );
};

Column.propTypes = {
  ...HTMLComponent.propTypes,
  isMultiline: PropTypes.bool,
  offset: PropTypes.string,
  size: PropTypes.string,
};

Column.defaultProps = {
  ...HTMLComponent.defaultProps,
  isMultiline: false,
};

Column.displayName = 'Column';

export default Column;
