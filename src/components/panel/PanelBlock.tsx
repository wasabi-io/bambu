import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from 'wasabi-common';
import {bulma as PanelStyle, HTMLComponent} from '../../';
import {Icon, IconProps} from '../../elements/icon';

/**
 * Refers PanelBlockProps.
 */
export interface PanelBlockProps extends IconProps {
    isActive?: boolean;
    hasIcon?: boolean;
    elementRef?: (ref: any) => any;
}

/**
 * PanelBlock Component.
 */
export default class PanelBlock extends HTMLComponent<PanelBlockProps> {
    /**
     * Desribe propTypes
     */
    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...Icon.propTypes,
        isActive: PropTypes.bool,
        hasIcon: PropTypes.bool
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false,
        hasIcon: false
    };

    /**
     * renders PanelBlock component.
     * @returns {JSX.Element}
     */
    public render(): JSX.Element {
        const {
            isActive, hasIcon, ariaHidden, border, effect, fixed, flip, iconStyle, inverse,
            name, pull, rotate, bSize, stack, iconClassName, iconSize, isList,
            listClassName, elementRef, className, ...props
        } = this.props;

        const classNames = ClassNames(
            PanelStyle.panelBlock,
            {
                [`${PanelStyle.isActive}`]: isActive
            },
            className
        );

        return (
            <span className={classNames} {...props} ref={elementRef}>
                {hasIcon && (
                    <Icon
                        ariaHidden={ariaHidden} border={border} effect={effect} fixed={fixed}
                        flip={flip} iconStyle={iconStyle} inverse={inverse} name={name}
                        pull={pull} rotate={rotate} bSize={bSize} stack={stack} iconClassName={iconClassName}
                        iconSize={iconSize} isList={isList} listClassName={listClassName}
                    />
                )}
                {this.props.children}
            </span>
        );
    }
}
