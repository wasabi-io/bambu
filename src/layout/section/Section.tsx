import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Size, SizeValues} from '../../base/css';
import HTMLComponent, {HTMLSectionProps} from '../../base/html/HTML';
import SectionStyle from '../../base/css/bulma';

export interface SectionProps extends HTMLSectionProps {
    size?: string | Size;
}

const Section: React.SFC<SectionProps> = (props: SectionProps) => {

    const {size, className, ...sectionProps} = props;

    const classNames = ClassNames(
        SectionStyle.section,
        SectionStyle[size],
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
    size: PropTypes.oneOf(SizeValues)
};

Section.defaultProps = {
    ...HTMLComponent.defaultProps,
};

Section.displayName = 'Section';

export default Section;
