import * as ClassNames from 'classnames';
import * as React from 'react';

import HTMLComponent, { HTMLDivProps } from '../../base/html/HTML';
import ModalStyle from './ModalStyle';

export interface ModalCardProps extends HTMLDivProps {
  isActive?: boolean;
}

const ModalCard: React.SFC<ModalCardProps> = (props: ModalCardProps) => {
  const { isActive, className, ...modalCardProps } = props;

  const classNames = ClassNames(
    ModalStyle.modal,
    {
      [`${ModalStyle.isActive}`]: isActive,
    },
    className
  );

  return <div className={classNames} {...modalCardProps}>
    <div className={ModalStyle.modalBackground}></div>
    <div className={ModalStyle.modalCard}>
      {props.children}
    </div>
  </div>
};

ModalCard.propTypes = {
  ...HTMLComponent.propTypes
};

ModalCard.defaultProps = {
  ...HTMLComponent.defaultProps
};

ModalCard.displayName = 'ModalCard';

export default ModalCard;
