import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as CardStyle, HTMLComponent, HTMLElementProps} from '../../';

export interface CardHeaderProps extends HTMLElementProps {
    elementRef?: (ref: any) => any;
}

/**
 * A horizontal bar with a shadow in <code>{&lt;Card/&gt;}</code> component.
 */
export default class CardHeader extends React.Component<CardHeaderProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, elementRef, children, ...cardHeaderProps} = this.props;

        const classNames = ClassNames([
            CardStyle.cardHeader,
            className
        ]);

        return (
            <header className={classNames} {...cardHeaderProps} ref={elementRef}>
                {children}
            </header>
        );
    }
}
