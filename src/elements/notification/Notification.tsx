import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Color } from '../../base/css';
import HTMLComponent, { HTMLDivProps } from '../../base/html/HTML';
import NotificationStyle from './NotificationStyle';

export interface NotificationProps extends HTMLDivProps {
  color?: string | Color;
}

const Notification: React.SFC<NotificationProps> = (props: NotificationProps) => {
  const { color, children, className, ...ownProps } = props;

  const classNames = ClassNames(
    NotificationStyle.notification,
    NotificationStyle[color],
    className
  );
  return (
    <div className={classNames} {...ownProps} >
      {children}
    </div>
  );
};

Notification.propTypes = {
  ...HTMLComponent.propTypes,
  color: PropTypes.string,
};

Notification.defaultProps = {
  ...HTMLComponent.defaultProps,
};

Notification.displayName = 'Notification';

export default Notification;
