import * as ClassNames from "classnames";
import * as React from "react";
import CardStyle from "rebul/lib/components/card/CardStyle";
import HTMLComponent, {HTMLDivProps} from "../../base/html/HTML";

export type CardContentProps = HTMLDivProps;

const CardContent: React.SFC<CardContentProps> = (props: CardContentProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([
        CardStyle.cardContent,
        className
    ]);

    return (
        <div className={classNames} {...inputProps} >
            {props.children}
        </div>
    );
};

CardContent.propTypes = HTMLComponent.propTypes;

CardContent.defaultProps = HTMLComponent.defaultProps;

CardContent.displayName = "CardContent";

export default CardContent;
