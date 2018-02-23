import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Objects from 'wasabi-common/lib/types/Objects';

import { Color, colorValues, Size, SizeValues, State, StateValues } from '../../base/css';
import HTMLComponent, { HTMLElementProps } from '../../base/html/HTML';
import Icon, { IconOptions } from '../icon/Icon';
import ButtonStyle from './ButtonStyle';

export enum ButtonTagNames {
  a = 'a',
  button = 'button',
  input = 'input',
}

export interface ButtonProps extends HTMLElementProps {
  tagName?: ButtonTagNames | string;
  type?: string;
  color?: string | Color;
  icon?: IconOptions;
  size?: string | Size;
  state?: string | State;
  isOutlined?: boolean;
  isInverted?: boolean;
  disabled?: boolean;
  isRounded?: boolean;
  onClick?: any;
}

const Button: React.SFC<ButtonProps> = (props: ButtonProps) => {
  const { tagName, isOutlined, isRounded, isInverted, icon, state, color, size, type, className, ...buttonProps } = props;

  const classNames = ClassNames(
    ButtonStyle.button,
    ButtonStyle[state],
    ButtonStyle[color],
    ButtonStyle[size],
    {
      [`${ButtonStyle.isOutlined}`]: isOutlined,
      [`${ButtonStyle.isInverted}`]: isInverted,
      [`${ButtonStyle.isRounded}`]: isRounded,
    },
    className,
  );
  (buttonProps as any).className = classNames;
  if (buttonProps.disabled) {
    buttonProps.onClick = null;
  }

  if (tagName === ButtonTagNames.input) {
    (buttonProps as any).type = type;
    // return React.createElement(tagName, buttonProps, [icon && <Icon icon={icon} size={size} />, props.children]);
    return <input {...buttonProps} >
      {/* {icon && <Icon icon={icon} size={size} />} */}
      {undefined}
    </input>;
  }
  return React.createElement(tagName, buttonProps, icon && <Icon icon={icon} size={size} />, props.children);
};

Button.propTypes = {
  ...HTMLComponent.propTypes,
  tagName: PropTypes.oneOf(Objects.values(ButtonTagNames)),
  color: PropTypes.oneOf(colorValues),
  size: PropTypes.oneOf(SizeValues),
  state: PropTypes.oneOf(StateValues),
};

Button.defaultProps = {
  ...HTMLComponent.defaultProps,
  tagName: 'a',
  type: 'submit'
};

Button.displayName = 'Button';

export default Button;
