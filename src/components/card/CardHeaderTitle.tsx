import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as CardStyle, HTMLComponent, HTMLPProps} from '../../';

export interface CardHeaderTitleProps extends HTMLPProps {
    elementRef?: (ref: any) => any;
}

export default class CardHeaderTitle extends React.Component<CardHeaderTitleProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, elementRef, children, ...inputProps} = this.props;

        const classNames = ClassNames(
            CardStyle.cardHeaderTitle,
            className
        );

        return (
            <p className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </p>
        );
    }
}
