import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as CardStyle, HTMLComponent, HTMLDivProps} from '../../';

export interface CardImageProps extends HTMLDivProps {
    elementRef?: (ref: any) => any;
}

/**
 * A `fullwidth` container for a responsive image in <code>{&lt;Card /&gt;}</code> component.
 */
export default class CardImage extends React.Component<CardImageProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, elementRef, children, ...inputProps} = this.props;

        const classNames = ClassNames([
            CardStyle.cardImage,
            className
        ]);

        return (
            <div className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}
