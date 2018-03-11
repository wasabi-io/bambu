import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Objects, { Props } from 'wasabi-common/lib/types/Objects';

import HTMLComponent, { HTMLImgProps } from '../../base/html/HTML';
import ImageStyle from './ImageStyle';

export enum ImageSize {
  is16X16 = 'is16X16',
  is24X24 = 'is24X24',
  is32X32 = 'is32X32',
  is48X48 = 'is48X48',
  is64X64 = 'is64X64',
  is96X96 = 'is96X96',
  is128X128 = 'is128X128',
}

export enum ImageRatio {
  isSquare = 'isSquare',
  is1By1 = 'is1By1',
  is4By3 = 'is4By3',
  is3By2 = 'is3By2',
  is16By9 = 'is16By9',
  is2By1 = 'is2By1'
}

/**
 * Refers Html Props and Additional Props.
 */
export interface ImageProps extends HTMLImgProps {
  alt?: string;
  pClassName?: string;
  pStyle?: Props;
  ratio?: string | ImageRatio;
  size?: string | ImageSize;
  src: string;
}

const Image: React.SFC<ImageProps> = (props: ImageProps) => {

  const { size, ratio, pClassName, pStyle, ...inputProps } = props;

  const classNames = ClassNames(
    ImageStyle.image,
    ImageStyle[size],
    ImageStyle[ratio],
    pClassName,
  );

  return (
    <figure className={classNames} style={pStyle}>
      <img {...inputProps} />
    </figure>
  );
};

Image.propTypes = {
  ...HTMLComponent.propTypes,
  alt: PropTypes.string,
  pClassName: PropTypes.string,
  pStyle: PropTypes.object,
  ratio: PropTypes.oneOf(Objects.values(ImageRatio)),
  size: PropTypes.oneOf(Objects.values(ImageSize)),
  src: PropTypes.string.isRequired
};

Image.defaultProps = HTMLComponent.defaultProps;

Image.displayName = 'Image';

export default Image;
