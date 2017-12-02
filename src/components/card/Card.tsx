import * as ClassNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import CardStyle from "rebul/lib/components/card/CardStyle";
import HTMLComponent, {HTMLDivProps} from "../../base/html/HTML";

/**
 * Refers Html Props and Additional Props.
 */
export interface CardProps extends HTMLDivProps {
    fullWidth?: boolean;
}

const Card: React.SFC<CardProps> = (props: CardProps) => {
    const {fullWidth, className, ...inputProps} = props;

    const classNames = ClassNames([
        CardStyle.card,
        fullWidth ? CardStyle.isFullwidth : undefined,
        className
    ]);

    return (
        <div className={classNames} {...inputProps} >
            {props.children}
        </div>
    );
};

Card.propTypes = {
    ...HTMLComponent.propTypes,
    fullWidth: PropTypes.bool,
};

Card.defaultProps = {
    ...HTMLComponent.defaultProps,
    fullWidth: false
};

Card.displayName = "Card";

export default Card;
