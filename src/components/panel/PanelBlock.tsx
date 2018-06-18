import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as PanelStyle, HTMLAllAttributes, HTMLComponent} from '../../';

/**
 * Refers PanelBlockProps.
 */
export interface PanelBlockProps extends HTMLAllAttributes {
    tagName?: string;
    isActive?: boolean;
    elementRef?: (ref: any) => any;
}

/**
 * PanelBlock Component.
 */
export default class PanelBlock extends HTMLComponent<PanelBlockProps> {
    /**
     * Desribe propTypes
     */
    public static propTypes = {
        ...HTMLComponent.propTypes,
        tagName: PropTypes.string,
        isActive: PropTypes.bool
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false
    };

    /**
     * renders PanelBlock component.
     * @returns {JSX.Element}
     */
    public render(): JSX.Element {
        const {tagName, href, isActive, elementRef, className, children, ...props} = this.props;

        const classNames = ClassNames(
            PanelStyle.panelBlock,
            {[`${PanelStyle.isActive}`]: isActive},
            className
        );

        const tag = tagName ? tagName : (href ? "a" : "div");

        return React.createElement(tag, {
            href,
            className: classNames,
            ref: elementRef,
            ...props,
        }, children);
    }
}
