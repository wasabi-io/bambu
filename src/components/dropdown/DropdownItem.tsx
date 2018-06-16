import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as DropdownStyle, HTMLAllAttributes, HTMLComponent} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface DropdownItemProps extends HTMLAllAttributes {
    tagName?: string;
    isActive?: boolean;
    elementRef?: (ref: any) => any;
}

export default class DropdownItem extends React.Component<DropdownItemProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        tagName: PropTypes.string,
        isActive: PropTypes.bool,
        elementRef: PropTypes.func
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false,
    };

    public render(): JSX.Element {
        const {tagName, href, isActive, children, className, elementRef, ...ownProps} = this.props;
        const tag = tagName ? tagName : (href ? "a" : "div");
        const classNames = ClassNames(
            DropdownStyle.dropdownItem,
            {
                [`${DropdownStyle.isActive}`]: isActive
            },
            className
        );

        return React.createElement(tag, {
            className: classNames,
            ref: elementRef,
            ...ownProps
        }, children);
    }
}

