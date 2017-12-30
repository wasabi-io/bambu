import * as ClassNames from 'classnames';
import * as React from 'react';

import HTMLComponent, { HTMLDivProps } from '../../base/html/HTML';
import CardStyle from './CardStyle';

/**
 * Refers Html Props and Additional Props.
 */
export interface CardProps extends HTMLDivProps {
}

const Card: React.SFC<CardProps> = (props: CardProps) => {
    const { className, ...cardProps } = props;

    const classNames = ClassNames([
        CardStyle.card,
        className
    ]);

    return (
        <div className={classNames} {...cardProps} >
            {props.children}
        </div>
    );
};

Card.propTypes = HTMLComponent.propTypes;

Card.defaultProps = HTMLComponent.defaultProps;

Card.displayName = "Card";

export default Card;
