import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from 'wasabi-common';
import {bulma as IconStyle, HTMLComponent, Size, sizeValues} from '../../';
import FaIcon, {FaIconProps} from './FaIcon';
import {IconSize} from "bambu/lib/elements/icon/FaIcon";
import bulma from "bambu/lib/base/css/bulma";

export type IconOptions = string | FaIconProps | JSX.Element;

/**
 * Refers Icon Props.
 */
export interface IconProps extends FaIconProps {
    iconClassName?: string;
    bSize?: string | Size;
    iconSize?: string | string | IconSize;
    isList?: boolean;
    listClassName?: string;
    elementRef?: (ref: any) => any;
}

export default class Icon extends HTMLComponent<IconProps> {
    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...FaIcon.propTypes,
        bSize: PropTypes.oneOf(sizeValues),
        iconSize: FaIcon.propTypes.bSize,
        isList: PropTypes.bool,
        listClassName: PropTypes.string,
        iconClassName: PropTypes.string
    };

    public static defaultProps = FaIcon.defaultProps;

    public render() {
        const {
            iconStyle, ariaHidden, border, effect, fixed, flip,
            inverse, name, pull, stack, iconClassName, iconSize,
            rotate, bSize, isList, className, elementRef,
            children, ...props
        } = this.props;

        const classNames = ClassNames(
            IconStyle.icon,
            bulma[bSize],
            {'fa-li': isList},
            className
        );

        return (
            <span className={classNames} {...props} ref={elementRef}>
                <FaIcon
                    bSize={iconSize}
                    iconStyle={iconStyle}
                    ariaHidden={ariaHidden}
                    border={border}
                    effect={effect}
                    fixed={fixed}
                    flip={flip}
                    inverse={inverse}
                    name={name}
                    pull={pull}
                    stack={stack}
                    rotate={rotate}
                    className={iconClassName}
                />
                {children}
            </span>
        );
    }
}
