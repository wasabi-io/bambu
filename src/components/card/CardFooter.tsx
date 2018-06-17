import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as CardStyle, HTMLComponent, HTMLElementProps} from '../../';

export interface CardFooterProps extends HTMLElementProps {
    elementRef?: (ref: any) => any;
}

/**
 * A horizontal list of controls in <code>{&lt;Card/&gt;}</code> component.
 */
export default class CardFooter extends React.Component<CardFooterProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, elementRef, children, ...cardFooterProps} = this.props;

        const classNames = ClassNames([
            CardStyle.cardFooter,
            className
        ]);

        return (
            <footer className={classNames} {...cardFooterProps} ref={elementRef}>
                {children}
            </footer>
        );
    }
}

