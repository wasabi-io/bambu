import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { has } from 'wasabi-common';
import JSXUtil from 'wasabi-ui/lib/jsx/JSXUtil';

import { Size, SizeValues } from '../../base/css';
import HTMLComponent, { HTMLSpanProps } from '../../base/html/HTML';
import FaIcon, { FaIconProps } from './FaIcon';
import IconStyle from './IconStyle';

export type IconOptions = string | FaIconProps | JSX.Element;

/**
 * Refers Html Props and Additional Props.
 */
export interface IconProps extends HTMLSpanProps {
    icon: IconOptions;
    size?: string | Size;
}

export default class Icon extends HTMLComponent<IconProps> {
    public static propTypes = {
        ...HTMLComponent.propTypes,
        icon: PropTypes.any,
        size: PropTypes.oneOf(SizeValues),
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public static renderIcon(icon: IconOptions) {
        if (!has(icon)) {
            return null;
        }
        if (typeof icon === "string") {
            return <FaIcon name={icon} />;
        }
        if ((icon as any).type) {
            if (JSXUtil.isJsx(icon)) {
                return icon as JSX.Element;
            }
        }

        return <FaIcon {...icon as FaIconProps} />;
    }

    public render() {
        const { size, icon, className, ...props } = this.props;

        const classNames = ClassNames(
            IconStyle.icon,
            IconStyle[size],
            className
        );

        return (
            <span className={classNames} {...props} >
                {Icon.renderIcon(icon)}
            </span>
        );
    }
}
