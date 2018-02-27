import * as ClassNames from 'classnames';
import * as React from 'react';
import HTMLComponent, { HTMLArticleProps } from '../../base/html/HTML';
import MediaStyle from './MediaStyle';

export type MediaProps = HTMLArticleProps;

const Media: React.SFC<MediaProps> = (props: MediaProps) => {

  const { className, ...inputProps } = props;

  const classNames = ClassNames(
    MediaStyle.media,
    className
  );

  return (
    <article className={classNames} {...inputProps}>
      {props.children}
    </article>
  );
};

Media.propTypes = HTMLComponent.propTypes;

Media.defaultProps = HTMLComponent.defaultProps;

Media.displayName = 'Media';

export default Media;
