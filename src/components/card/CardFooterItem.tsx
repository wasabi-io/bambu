import * as ClassNames from 'classnames';
import * as React from 'react';
import CardStyle from 'rebul/lib/components/card/CardStyle';

import HTMLComponent, { HTMLSpanProps } from '../../base/html/HTML';

export type CardFooterItemProps = HTMLSpanProps;

const CardFooterItem: React.SFC<CardFooterItemProps> = (props: CardFooterItemProps) => {
  const { className, ...cardFooterItemProps } = props;

  const classNames = ClassNames([
    CardStyle.cardFooterItem,
    className
  ]);

  return (
    <span className={classNames} {...cardFooterItemProps}>
      {props.children}
    </span>
  );
};

CardFooterItem.propTypes = HTMLComponent.propTypes;

CardFooterItem.defaultProps = HTMLComponent.defaultProps;

CardFooterItem.displayName = 'CardFooterItem';

export default CardFooterItem;
