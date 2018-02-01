import * as ClassNames from 'classnames';
import * as React from 'react';

import HTMLComponent, { HTMLTfootProps } from '../../base/html/HTML';
import TableStyle from './TableStyle';


export type TFootProps = HTMLTfootProps;

const TFoot: React.SFC<TFootProps> = (props: TFootProps) => {

  const { className, ...tFootProps } = props;

  const classNames = ClassNames(
    TableStyle.tfoot,
    className
  );

  return (
    <tfoot className={classNames} {...tFootProps} >
      {props.children}
    </tfoot>
  );
};

TFoot.propTypes = HTMLComponent.propTypes;
TFoot.defaultProps = HTMLComponent.defaultProps;
TFoot.displayName = 'TFoot';

export default TFoot;
