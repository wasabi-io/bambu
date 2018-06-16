import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as TagStyle, Color, colorValues, HTMLAllAttributes, HTMLComponent, Size, sizeValues} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface TagProps extends HTMLAllAttributes {
    color?: string | Color;
    bSize?: string | Size;
    tagName?: string;
    elementRef?: (ref: any) => any;
}

export default class Tag extends React.Component<TagProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        color: PropTypes.oneOf(colorValues),
        bSize: PropTypes.oneOf(sizeValues)
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        tagName: 'span'
    };

    public render(): JSX.Element {
        const {tagName, bSize, color, className, children, elementRef, ...tagProps} = this.props;

        const classNames = ClassNames([
            TagStyle.tag,
            TagStyle[bSize],
            TagStyle[color],
            className
        ]);

        return React.createElement(tagName, {
            className: classNames,
            ref: elementRef,
            ...tagProps
        }, children);
    }
}
