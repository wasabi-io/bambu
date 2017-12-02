import * as ClassNames from "classnames";
import * as React from "react";
import HTMLComponent, {HTMLSectionProps} from "../../base/html/HTML";
import SectionStyle from "./SectionStyle";

export type SectionProps = HTMLSectionProps;

const Section: React.SFC<SectionProps> = (props: SectionProps) => {

    const {className, ...inputProps} = props;

    const classNames = ClassNames([SectionStyle.section, className]);

    return (
        <footer className={classNames} {...inputProps} >
            {props.children}
        </footer>
    );
};

Section.propTypes = HTMLComponent.propTypes;

Section.defaultProps = HTMLComponent.defaultProps;

Section.displayName = "Section";

export default Section;
