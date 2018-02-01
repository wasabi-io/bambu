import * as ClassNames from 'classnames';
import * as React from 'react';
import CardStyle from 'rebul/lib/components/card/CardStyle';

import HTMLComponent, { HTMLElementProps } from '../../base/html/HTML';

export type CardHeaderProps = HTMLElementProps;

const CardHeader: React.SFC<CardHeaderProps> = (props: CardHeaderProps) => {
  const { className, ...cardHeaderProps } = props;

  const classNames = ClassNames([
    CardStyle.cardHeader,
    className
  ]);

  return (
    <header className={classNames} {...cardHeaderProps} >
      {props.children}
    </header>
  );
};

CardHeader.propTypes = HTMLComponent.propTypes;

CardHeader.defaultProps = HTMLComponent.defaultProps;

CardHeader.displayName = 'CardHeader';

export default CardHeader;
