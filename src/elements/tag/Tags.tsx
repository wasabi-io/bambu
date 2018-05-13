import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as TagStyle, colorValues, HTMLComponent, HTMLSpanProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface TagsProps extends HTMLSpanProps {
    hasAddons?: boolean;
}

const Tags: React.SFC<TagsProps> = (props: TagsProps) => {

    const {hasAddons, className, ...tagsProps} = props;

    const classNames = ClassNames(
        TagStyle.tags,
        {
            [`${TagStyle.hasAddons}`]: hasAddons,
        },
        className
    );

    return (
        <div className={classNames} {...tagsProps}>
            {props.children}
        </div>
    );
};

Tags.propTypes = {
    ...HTMLComponent.propTypes,
    color: PropTypes.oneOf(colorValues)
};

Tags.defaultProps = HTMLComponent.defaultProps;

Tags.displayName = 'Tag';

export default Tags;
