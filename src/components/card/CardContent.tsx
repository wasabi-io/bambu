import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as CardStyle, HTMLComponent, HTMLDivProps} from '../../';

export interface CardContentProps extends HTMLDivProps {
    elementRef?: (ref: any) => any;
}

/**
 * A multi-purpose container for any other element in <code>{&lt;Card  /&gt;}</code> component.
 */
export default class CardContent extends React.Component<CardContentProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, elementRef, children, ...cardContentProps} = this.props;

        const classNames = ClassNames([
            CardStyle.cardContent,
            className
        ]);

        return (
            <div className={classNames} {...cardContentProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}
