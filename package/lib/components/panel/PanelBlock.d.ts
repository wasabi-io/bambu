/// <reference types="react" />
import * as PropTypes from 'prop-types';
import HTMLComponent, { HTMLDivProps, HTMLSpanProps } from '../../base/html/HTML';
import { IconOptions, IconSize } from '../../elements/icon';
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
    static propTypes: {
        icon: PropTypes.Requireable<any>;
        iconParent: {};
        iconSize: PropTypes.Requireable<any>;
        isActive: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<any>;
        style: PropTypes.Requireable<any>;
    };
    /**
     * default props types for Card Element.
     * @type {{className: string; style: {}}}
     */
    static defaultProps: {
        isActive: boolean;
        className: string;
        style: {};
    };
    static renderIcon(icon: IconOptions, iconSize: IconSize, iconParent: HTMLSpanProps): JSX.Element;
    /**
     * renders Card element.
     * @returns {JSX.Element}
     */
    render(): JSX.Element;
}
