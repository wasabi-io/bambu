import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as SectionStyle, HTMLComponent, HTMLSectionProps, Size, sizeValues} from '../../';

export interface SectionProps extends HTMLSectionProps {
    bSize?: string | Size;
}

const Section: React.SFC<SectionProps> = (props: SectionProps) => {

    const {bSize, className, ...sectionProps} = props;

    const classNames = ClassNames(
        SectionStyle.section,
        SectionStyle[bSize],
        className
    );

    return (
        <section className={classNames} {...sectionProps} >
            {props.children}
        </section>
    );
};

Section.propTypes = {
    ...HTMLComponent.propTypes,
    bSize: PropTypes.oneOf(sizeValues)
};

Section.defaultProps = {
    ...HTMLComponent.defaultProps,
};

Section.displayName = 'Section';

export default Section;
