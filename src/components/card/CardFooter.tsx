import * as ClassNames from 'classnames';
import * as React from 'react';
import CardStyle from './CardStyle';

import HTMLComponent, {HTMLElementProps} from '../../base/html/HTML';

export type CardFooterProps = HTMLElementProps;

const CardFooter: React.SFC<CardFooterProps> = (props: CardFooterProps) => {
    const {className, ...cardFooterProps} = props;

    const classNames = ClassNames([
        CardStyle.cardFooter,
        className
    ]);

    return (
        <footer className={classNames} {...cardFooterProps} >
            {props.children}
        </footer>
    );
};

CardFooter.propTypes = HTMLComponent.propTypes;

CardFooter.defaultProps = HTMLComponent.defaultProps;

CardFooter.displayName = 'CardFooter';

export default CardFooter;
