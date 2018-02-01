import * as ClassNames from 'classnames';
import * as React from 'react';
import HTMLComponent, { HTMLDivProps } from '../../base/html/HTML';
import ContentStyle from './ContentStyle';

export type ContentProps = HTMLDivProps;

const Content: React.SFC<ContentProps> = (props: ContentProps) => {

  const { className, ...inputProps } = props;

  const classNames = ClassNames([ContentStyle.content, className]);

  return (
    <div className={classNames} {...inputProps} >
      {props.children}
    </div>
  );
};

Content.propTypes = HTMLComponent.propTypes;

Content.defaultProps = HTMLComponent.defaultProps;

Content.displayName = 'Content';

export default Content;
