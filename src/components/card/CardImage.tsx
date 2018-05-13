import * as ClassNames from 'classnames';
import * as React from 'react';
import {bulma as CardStyle, HTMLComponent, HTMLDivProps} from '../../';

export type CardImageProps = HTMLDivProps;

const CardImage: React.SFC<CardImageProps> = (props: CardImageProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([
        CardStyle.cardImage,
        className
    ]);

    return (
        <div className={classNames} {...inputProps} >
            {props.children}
        </div>
    );
};

CardImage.propTypes = HTMLComponent.propTypes;

CardImage.defaultProps = HTMLComponent.defaultProps;

CardImage.displayName = 'CardImage';

export default CardImage;
