import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import { Color, colorValues, Size, SizeValues } from '../../base/css';
import HTMLComponent, { HTMLAllAttributes } from '../../base/html/HTML';
import TagStyle from './TagStyle';

/**
 * Refers Html Props and Additional Props.
 */
export interface TagProps extends HTMLAllAttributes {
    color?: string | Color;
    bSize?: string | Size;
    tagName?: string;
}

const Tag: React.SFC<TagProps> = (props: TagProps) => {

    const { tagName, bSize, color, className, ...tagProps } = props;

    const classNames = ClassNames([
        TagStyle.tag,
        TagStyle[bSize],
        TagStyle[color],
        className
    ]);

    (tagProps as any).className = classNames;
    return React.createElement(tagName, tagProps, props.children);
};

Tag.propTypes = {
    ...HTMLComponent.propTypes,
    color: PropTypes.oneOf(colorValues),
    bSize: PropTypes.oneOf(SizeValues)
};

Tag.defaultProps = {
    ...HTMLComponent.defaultProps,
    tagName: "span"
};

Tag.displayName = "Tag";

export default Tag;
