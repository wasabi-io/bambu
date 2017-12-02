import * as ClassNames from "classnames";
import * as React from "react";
import HTMLComponent, {HTMLSectionProps} from "../../base/html/HTML";
import HeroStyle from "./HeroStyle";

export type HeroBodyProps = HTMLSectionProps;

const HeroBody: React.SFC<HeroBodyProps> = (props: HeroBodyProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([HeroStyle.heroBody, className]);

    return (
        <section className={classNames} {...inputProps} >
            {props.children}
        </section>
    );
};

HeroBody.propTypes = HTMLComponent.propTypes;

HeroBody.defaultProps = HTMLComponent.defaultProps;

HeroBody.displayName = "HeroBody";

export default HeroBody;
