import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as CardStyle, HTMLComponent, HTMLElementProps} from '../../';

export interface CardHeaderProps extends HTMLElementProps {
    elementRef?: any;
}

export default class CardHeader extends React.Component<CardHeaderProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, elementRef, children, ...cardHeaderProps} = this.props;

        const classNames = ClassNames([
            CardStyle.cardHeader,
            className
        ]);

        return (
            <header className={classNames} {...cardHeaderProps} ref={elementRef} >
                {children}
            </header>
        );
    }
}
