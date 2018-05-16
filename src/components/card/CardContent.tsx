import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as CardStyle, HTMLComponent, HTMLDivProps} from '../../';

export interface CardContentProps extends HTMLDivProps {
    elementRef?: any;
}

export default class CardContent extends React.Component<CardContentProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, elementRef, children, ...cardContentProps} = this.props;

        const classNames = ClassNames([
            CardStyle.cardContent,
            className
        ]);

        return (
            <div className={classNames} {...cardContentProps} ref={elementRef} >
                {children}
            </div>
        );
    }
}
