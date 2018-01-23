import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Objects from 'wasabi-common/lib/types/Objects';

import { Alignment, AlignmentValues, Size, SizeValues } from '../../base/css';
import HTMLComponent, { HTMLDivProps } from '../../base/html/HTML';
import TabsStyle from './TabsStyle';

export enum tabsStyle { boxed = 'isBoxed', toggle = 'isToggle' }

export interface TabsProps extends HTMLDivProps {
  alignment?: string | Alignment;
  isFullwidth?: boolean;
  size?: string | Size;
  tabStyle?: string | tabsStyle;
}

const Tabs: React.SFC<TabsProps> = (props: TabsProps) => {

  const { isFullwidth, alignment, size, tabStyle, className, ...inputProps } = props;

  const classNames = ClassNames(
    TabsStyle.tabs,
    TabsStyle[alignment],
    TabsStyle[size],
    TabsStyle[tabStyle],
    {
      [`${TabsStyle.isFullwidth}`]: isFullwidth,
    },
    className
  );

  return (
    <div className={classNames} {...inputProps}>
      <ul>
        {props.children}
      </ul>
    </div>
  );
};

Tabs.propTypes = {
  ...HTMLComponent.propTypes,
  alignment: PropTypes.oneOf(AlignmentValues),
  isFullwidth: PropTypes.bool,
  size: PropTypes.oneOf(SizeValues),
  tabStyle: PropTypes.oneOf(Objects.values(tabsStyle))
};

Tabs.defaultProps = {
  ...HTMLComponent.defaultProps,
  isFullwidth: false,
};

Tabs.displayName = 'Tabs';

export default Tabs;
