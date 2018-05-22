import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as TitleStyle, HTMLComponent, HTMLPProps, Size6, size6Values} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface TitleProps extends HTMLPProps {
    bSize?: string | Size6;
    tagName?: string;
    elementRef?: (ref: any) => any;
}

export default class Title extends React.Component<TitleProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        bSize: PropTypes.oneOf(size6Values),
        tagName: PropTypes.string
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        tagName: 'h1'
    };

    public render(): JSX.Element {
        const {tagName, bSize, className, children, elementRef, ...titleProps} = this.props;

        const classNames = ClassNames([
            TitleStyle.title,
            TitleStyle[bSize],
            className
        ]);

        return React.createElement(tagName, {
            className: classNames,
            ref: elementRef,
            ...titleProps
        }, children);
    }
}
