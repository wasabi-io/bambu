import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as TagStyle, colorValues, HTMLComponent, HTMLSpanProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface TagsProps extends HTMLSpanProps {
    hasAddons?: boolean;
    elementRef?: (ref: any) => any;
}

export default class Tags extends React.Component<TagsProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        color: PropTypes.oneOf(colorValues)
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {hasAddons, className, children, elementRef, ...tagsProps} = this.props;

        const classNames = ClassNames(TagStyle.tags, {[`${TagStyle.hasAddons}`]: hasAddons,}, className);

        return (
            <div className={classNames} {...tagsProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}
