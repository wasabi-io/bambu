import * as ClassNames from 'classnames';
import * as React from 'react';
import CardStyle from './CardStyle';
import HTMLComponent, {HTMLPProps} from '../../base/html/HTML';

export type CardHeaderTitleProps = HTMLPProps;

const CardHeaderTitle: React.SFC<CardHeaderTitleProps> = (props: CardHeaderTitleProps) => {
    const {className, ...inputProps} = props;

    const classNames = ClassNames(
        CardStyle.cardHeaderTitle,
        className
    );

    return (
        <p className={classNames} {...inputProps} >
            {props.children}
        </p>
    );
};

CardHeaderTitle.propTypes = HTMLComponent.propTypes;

CardHeaderTitle.defaultProps = HTMLComponent.defaultProps;

CardHeaderTitle.displayName = 'CardHeaderTitle';

export default CardHeaderTitle;
