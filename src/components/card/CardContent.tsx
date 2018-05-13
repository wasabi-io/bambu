import * as ClassNames from 'classnames';
import * as React from 'react';
import {bulma as CardStyle, HTMLComponent, HTMLDivProps} from '../../';

export type CardContentProps = HTMLDivProps;

const CardContent: React.SFC<CardContentProps> = (props: CardContentProps) => {

    const {className, ...cardContentProps} = props;

    const classNames = ClassNames([
        CardStyle.cardContent,
        className
    ]);

    return (
        <div className={classNames} {...cardContentProps} >
            {props.children}
        </div>
    );
};

CardContent.propTypes = HTMLComponent.propTypes;

CardContent.defaultProps = HTMLComponent.defaultProps;

CardContent.displayName = 'CardContent';

export default CardContent;
