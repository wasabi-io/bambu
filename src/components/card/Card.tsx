import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as CardStyle, HTMLComponent, HTMLDivProps} from '../../';

/**
 *  Provide a flexible and extensible content container with multiple variants and options.
 */
export interface CardProps extends HTMLDivProps {
    elementRef?: (ref: any) => any;
}

/**
 * <p>The <strong>Card</strong> component comprises several elements that you can mix and match:</p>
 * <code>&lt;Card /&gt;</code>: the main container
 */
export default class Card extends React.Component<CardProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, elementRef, children, ...cardProps} = this.props;

        const classNames = ClassNames([
            CardStyle.card,
            className
        ]);

        return (
            <div className={classNames} {...cardProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}
