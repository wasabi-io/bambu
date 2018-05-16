import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as TagStyle, colorValues, HTMLComponent, HTMLSpanProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface TagsProps extends HTMLSpanProps {
    hasAddons?: boolean;
}

export default class Tags extends React.Component<TagsProps, {}> {
    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        color: PropTypes.oneOf(colorValues)
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {hasAddons, className, children, ...tagsProps} = this.props;

        const classNames = ClassNames(TagStyle.tags, {[`${TagStyle.hasAddons}`]: hasAddons,}, className);

        return (
            <div className={classNames} {...tagsProps}>
                {children}
            </div>
        );
    }
}
