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
}

const Tag: React.SFC<TagProps> = (props: TagProps) => {

    const {tagName, bSize, color, className, ...tagProps} = props;

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
    bSize: PropTypes.oneOf(sizeValues)
};

Tag.defaultProps = {
    ...HTMLComponent.defaultProps,
    tagName: 'span'
};

Tag.displayName = 'Tag';

export default Tag;
