import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as CardStyle, HTMLComponent, HTMLElementProps} from '../../';

export interface CardFooterProps extends HTMLElementProps {
}

export default class CardFooter extends React.Component<CardFooterProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, ...cardFooterProps} = this.props;

        const classNames = ClassNames([
            CardStyle.cardFooter,
            className
        ]);

        return (
            <footer className={classNames} {...cardFooterProps} >
                {children}
            </footer>
        );
    }
}

