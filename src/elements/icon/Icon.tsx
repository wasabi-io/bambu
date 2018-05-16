import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {has, Props} from 'wasabi-common';
import JSXUtil from 'wasabi-ui/lib/jsx/JSXUtil';
import {bulma as IconStyle, HTMLComponent, HTMLSpanProps} from '../../';
import FaIcon, {FaIconProps, IconSize, IconSizeValues} from './FaIcon';

export type IconOptions = string | FaIconProps | JSX.Element;

/**
 * Refers Html Props and Additional Props.
 */
export interface IconProps extends HTMLSpanProps {
    icon: string | IconOptions;
    bSize?: string | IconSize;
}

export default class Icon extends HTMLComponent<IconProps> {
    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        icon: PropTypes.any,
        bSize: PropTypes.oneOf(IconSizeValues),
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public static renderIcon(icon: IconOptions, bSize?: string | IconSize) {
        if (!has(icon)) {
            return null;
        }
        if (typeof icon === 'string') {
            return <FaIcon name={icon} bSize={bSize}/>;
        }
        if ((icon as any).type) {
            if (JSXUtil.isJsx(icon)) {
                return icon as JSX.Element;
            }
        }

        return <FaIcon {...icon as FaIconProps} />;
    }

    public render() {
        const {bSize, icon, className, ...props} = this.props;

        const classNames = ClassNames(
            IconStyle.icon,
            className
        );

        return <span className={classNames} {...props} >{Icon.renderIcon(icon, bSize)}</span>;
    }
}
