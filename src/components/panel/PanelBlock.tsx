import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {has, Props} from 'wasabi-common';
import {bulma as PanelStyle, HTMLComponent, HTMLDivProps, HTMLSpanProps} from '../../';
import {Icon, IconOptions, IconSize, IconSizeValues} from '../../elements/icon';

/**
 * Refers Html Props and Additional Props.
 */
export interface PanelBlockProps extends HTMLDivProps {
    isActive?: boolean;
    icon?: IconOptions;
    iconSize?: IconSize;
    iconParent?: HTMLSpanProps;
    elementRef?: (ref: any) => any;
}

/**
 * Card parent elements.
 */
export default class PanelBlock extends HTMLComponent<PanelBlockProps> {
    /**
     * Desribe propTypes
     */
    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        icon: PropTypes.any,
        iconParent: PropTypes.object,
        iconSize: PropTypes.oneOf(IconSizeValues),
        isActive: PropTypes.bool
    };

    /**
     * default props types for Card Element.
     * @type {{className: string; style: {}}}
     */
    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false
    };

    public static renderIcon(icon: IconOptions, iconSize: IconSize, iconParent: HTMLSpanProps) {
        if (!has(icon)) {
            return null;
        }
        const {className, ...iconParentProps} = iconParent;

        const classNames = ClassNames([PanelStyle.panelIcon, className]);

        return (
            <Icon className={classNames} icon={icon} bSize={iconSize}  {...iconParentProps} />
        );
    }

    /**
     * renders Card element.
     * @returns {JSX.Element}
     */
    public render(): JSX.Element {

        const {isActive, icon, iconSize, iconParent, className, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames(
            PanelStyle.panelBlock,
            {
                [`${PanelStyle.isActive}`]: isActive
            },
            className
        );

        return (
            <span className={classNames} {...inputProps} ref={elementRef}>
                {PanelBlock.renderIcon(icon, iconSize, iconParent)}
                {this.props.children}
            </span>
        );
    }
}
