import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as CardStyle, HTMLComponent, HTMLElementProps} from '../../';

export interface CardFooterItemProps extends HTMLElementProps {
    tagName?: string;
}

export default class CardFooterItem extends React.Component<CardFooterItemProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        tagName: PropTypes.string,
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        tagName: 'span',
    };

    public render(): JSX.Element {
        const {tagName, children, className, ...cardFooterItemProps} = this.props;

        const classNames = ClassNames([
            CardStyle.cardFooterItem,
            className
        ]);

        return React.createElement(tagName, {className: classNames, ...cardFooterItemProps}, children);
    }
}
