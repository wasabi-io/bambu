import * as ClassNames from 'classnames';
import * as React from 'react';
import HTMLComponent, { HTMLDivProps } from '../../base/html/HTML';
import MediaStyle from './MediaStyle';

export type MediaLeftProps = HTMLDivProps;

const MediaLeft: React.SFC<MediaLeftProps> = (props: MediaLeftProps) => {

  const { className, ...inputProps } = props;

  const classNames = ClassNames([
    MediaStyle.mediaLeft,
    className
  ]);

  return (
    <div {...inputProps} className={classNames}>
      {props.children}
    </div>
  );
};

MediaLeft.propTypes = HTMLComponent.propTypes;

MediaLeft.defaultProps = HTMLComponent.defaultProps;

MediaLeft.displayName = 'MediaContent';

export default MediaLeft;
