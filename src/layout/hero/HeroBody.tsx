import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as HeroStyle, HTMLComponent, HTMLSectionProps} from '../../';

export interface HeroBodyProps extends HTMLSectionProps {
}

export default class HeroBody extends React.Component<HeroBodyProps, {}> {
    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, ...heroBodyProps} = this.props;

        const classNames = ClassNames(
            HeroStyle.heroBody,
            className
        );

        return (
            <section className={classNames} {...heroBodyProps} >
                {children}
            </section>
        );
    }
}
