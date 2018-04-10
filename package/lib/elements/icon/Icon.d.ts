/// <reference types="react" />
import * as PropTypes from 'prop-types';
import HTMLComponent, { HTMLSpanProps } from '../../base/html/HTML';
import { FaIconProps, IconSize } from './FaIcon';
export declare type IconOptions = string | FaIconProps | JSX.Element;
/**
 * Refers Html Props and Additional Props.
 */
export interface IconProps extends HTMLSpanProps {
    icon: string | IconOptions;
    size?: string | IconSize;
}
export default class Icon extends HTMLComponent<IconProps> {
    static propTypes: {
        icon: PropTypes.Requireable<any>;
        size: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<any>;
        style: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        className: string;
        style: {};
    };
    static renderIcon(icon: IconOptions, size?: string | IconSize): JSX.Element;
    render(): JSX.Element;
}
