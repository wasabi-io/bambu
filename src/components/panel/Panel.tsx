import * as ClassNames from 'classnames';
import * as React from 'react';
import HTMLComponent, { HTMLNavProps } from '../../base/html/HTML';
import PanelStyle from './PanelStyle';

export type PanelProps = HTMLNavProps;

const Panel: React.SFC<PanelProps> = (props: PanelProps) => {

  const { className, ...inputProps } = props;

  const classNames = ClassNames([PanelStyle.panel, className]);

  return (
    <nav className={classNames} {...inputProps}>
      {props.children}
    </nav>
  );
};

Panel.propTypes = HTMLComponent.propTypes;
Panel.defaultProps = HTMLComponent.defaultProps;

export default Panel;
