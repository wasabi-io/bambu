import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Alignment, AlignmentValues } from '../../base/css';
import HTMLComponent, { HTMLDivProps } from '../../base/html/HTML';
import TabGroupStyle from './TabsStyle';

export interface TabGroupProps extends HTMLDivProps {
  alignment?: string | Alignment;
}

const TabGroup: React.SFC<TabGroupProps> = (props: TabGroupProps) => {

  const { alignment, className, ...inputProps } = props;

  const classNames = ClassNames(
    TabGroupStyle[alignment],
    className
  );

  return (
    <div className={classNames} {...inputProps}>
      {props.children}
    </div>
  );
};

TabGroup.propTypes = {
  ...HTMLComponent.propTypes,
  alignment: PropTypes.oneOf(AlignmentValues),
};

TabGroup.defaultProps = HTMLComponent.defaultProps;

TabGroup.displayName = 'TabGroup';

export default TabGroup;
