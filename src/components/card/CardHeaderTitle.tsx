import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as CardStyle, HTMLComponent, HTMLPProps} from '../../';

export interface CardHeaderTitleProps extends HTMLPProps {
    isCentered?: boolean;
    elementRef?: (ref: any) => any;
}

/**
 * A `left-aligned` bold text in <code>{&lt;CardHeader /&gt;}</code> component.
 */
export default class CardHeaderTitle extends React.Component<CardHeaderTitleProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        isCentered: PropTypes.bool,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {isCentered, className, elementRef, children, ...inputProps} = this.props;

        const classNames = ClassNames(
            CardStyle.cardHeaderTitle,
            {
                [`${CardStyle.isCentered}`]: isCentered
            },
            className
        );

        return (
            <p className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </p>
        );
    }
}
