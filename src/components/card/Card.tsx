import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as CardStyle, HTMLComponent, HTMLDivProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface CardProps extends HTMLDivProps {
    elementRef?: (ref: any) => any;
}

export default class Card extends React.Component<CardProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, elementRef, children, ...cardProps} = this.props;

        const classNames = ClassNames([
            CardStyle.card,
            className
        ]);

        return (
            <div className={classNames} {...cardProps} ref={elementRef} >
                {children}
            </div>
        );
    }
}
