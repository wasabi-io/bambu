import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {has} from 'wasabi-common';
import PanelStyle from '../../bulma';
import HTMLComponent, {HTMLDivProps, HTMLSpanProps} from '../../base/html/HTML';
import {Icon, IconOptions, IconSize, IconSizeValues} from '../../elements/icon';

/**
 * Refers Html Props and Additional Props.
 */
export interface PanelBlockProps extends HTMLDivProps {
    isActive?: boolean;
    icon?: IconOptions;
    iconSize?: IconSize;
    iconParent?: HTMLSpanProps;
}

/**
 * Card parent elements.
 */
export default class PanelBlock extends HTMLComponent<PanelBlockProps> {
    /**
     * Desribe propTypes
     */
    public static propTypes = {
        ...HTMLComponent.propTypes,
        icon: PropTypes.any,
        iconParent: {},
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
            <Icon className={classNames} icon={icon} size={iconSize}  {...iconParentProps} />
        );
    }

    /**
     * renders Card element.
     * @returns {JSX.Element}
     */
    public render(): JSX.Element {

        const {isActive, icon, iconSize, iconParent, className, ...inputProps} = this.props;

        const classNames = ClassNames([
            PanelStyle.panelBlock,
            isActive ? PanelStyle.isActive : undefined,
            className
        ]);

        return (
            <span className={classNames} {...inputProps}>
        {PanelBlock.renderIcon(icon, iconSize, iconParent)}
                {this.props.children}
      </span>
        );
    }
}
