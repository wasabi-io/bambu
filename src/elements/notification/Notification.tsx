import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { colorValues } from '../../base/css';
import HTMLComponent, { HTMLButtonProps, HTMLDivProps } from '../../base/html/HTML';
import NotificationStyle from './NotificationStyle';

/**
 * Refers Html Props and Additional Props.
 */
export interface NotificationProps extends HTMLDivProps {
  closeButton?: HTMLButtonProps;
  closeable?: boolean;
  color?: string;
}

export default class Notification extends HTMLComponent<NotificationProps> {

  public static propTypes = {
    ...HTMLComponent.propTypes,
    closeButton: PropTypes.oneOf([
      PropTypes.node,
      PropTypes.object
    ]),
    closeable: PropTypes.bool,
    color: PropTypes.oneOf(colorValues)
  };

  public static defaultProps = {
    ...HTMLComponent.defaultProps,
    closeable: false
  };

  public static renderCloseButton(closeable: boolean, buttonProps: HTMLButtonProps): JSX.Element {
    if (closeable) {
      return <button className={NotificationStyle.delete} {...buttonProps} />;
    }
    return null;
  }

  public render(): JSX.Element {
    const { color, closeable, closeButton, className, ...inputProps } = this.props;

    const classNames = ClassNames([
      NotificationStyle.notification,
      NotificationStyle[color],
      className
    ]);

    return (
      <div className={classNames} {...inputProps} >
        {Notification.renderCloseButton(closeable, closeButton)}
        {this.props.children}
      </div>
    );
  }
}
