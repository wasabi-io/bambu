import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from 'wasabi-common';
import {bulma as SectionStyle, HTMLComponent, HTMLSectionProps, Size, sizeValues} from '../../';

export interface SectionProps extends HTMLSectionProps {
    bSize?: string | Size;
    elementRef?: (ref: any) => any;
}

export default class Section extends React.Component<SectionProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        bSize: PropTypes.oneOf(sizeValues)
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {bSize, className, children, elementRef, ...sectionProps} = this.props;

        const classNames = ClassNames(
            SectionStyle.section,
            SectionStyle[bSize],
            className
        );

        return (
            <section className={classNames} {...sectionProps} ref={elementRef}>
                {children}
            </section>
        );
    }
}
