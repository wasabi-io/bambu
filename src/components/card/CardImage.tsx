import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as CardStyle, HTMLComponent, HTMLDivProps} from '../../';

export interface CardImageProps extends HTMLDivProps {
    elementRef?: (ref: any) => any;
}

export default class CardImage extends React.Component<CardImageProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

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
