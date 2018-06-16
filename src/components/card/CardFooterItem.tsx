import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as CardStyle, HTMLAllAttributes, HTMLComponent} from '../../';

export interface CardFooterItemProps extends HTMLAllAttributes {
    tagName?: string;
    elementRef?: (ref: any) => any;
}

export default class CardFooterItem extends React.Component<CardFooterItemProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        tagName: 'span',
    };

    public render(): JSX.Element {
        const {tagName, className, elementRef, children, ...cardFooterItemProps} = this.props;

        const classNames = ClassNames([
            CardStyle.cardFooterItem,
            className
        ]);

        return React.createElement(tagName, {className: classNames, ref: elementRef, ...cardFooterItemProps}, children);
    }
}
