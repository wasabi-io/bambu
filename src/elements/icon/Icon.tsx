import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { has } from 'wasabi-common';
import JSXUtil from 'wasabi-ui/lib/jsx/JSXUtil';

import { Color } from '../../base/css';
import HTMLComponent, { HTMLSpanProps } from '../../base/html/HTML';
import FaIcon, { FaIconProps, IconSize, IconSizeValues } from './FaIcon';
import IconStyle from './IconStyle';

export type IconOptions = string | FaIconProps | JSX.Element;

/**
 * Refers Html Props and Additional Props.
 */
export interface IconProps extends HTMLSpanProps {
  icon: string | IconOptions;
  size?: string | IconSize;
  color?: string | Color;
}

export default class Icon extends HTMLComponent<IconProps> {
  public static propTypes = {
    ...HTMLComponent.propTypes,
    icon: PropTypes.any,
    color: PropTypes.string,
    size: PropTypes.oneOf(IconSizeValues),
  };

  public static defaultProps = HTMLComponent.defaultProps;

  public static renderIcon(icon: IconOptions, size?: string | IconSize) {
    if (!has(icon)) {
      return null;
    }
    if (typeof icon === 'string') {
      return <FaIcon name={icon} size={size} />;
    }
    if ((icon as any).type) {
      if (JSXUtil.isJsx(icon)) {
        return icon as JSX.Element;
      }
    }

    return <FaIcon {...icon as FaIconProps} />;
  }

  public render() {
    const { size, icon, color, className, ...props } = this.props;

    const classNames = ClassNames(
      IconStyle.icon,
      IconStyle[color],
      className
    );

    return (
      <span className={classNames} {...props} >
        {Icon.renderIcon(icon, size)}
      </span>
    );
  }
}
