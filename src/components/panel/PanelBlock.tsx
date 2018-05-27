import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from 'wasabi-common';
import {bulma as PanelStyle, HTMLComponent} from '../../';
import {FaIcon, FaIconProps, Icon, IconProps} from '../../elements/icon';

/**
 * Refers PanelBlockProps.
 */
export interface PanelBlockProps extends IconProps {
    isActive?: boolean;
    hasIcon?: boolean;
    icon: string | FaIconProps;
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
            isActive, hasIcon, icon, iconClassName, bSize, stack, elementRef, className, ...props
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
                    <Icon iconClassName={iconClassName} bSize={bSize} stack={stack}>
                        {typeof icon === "string" ? <FaIcon name={icon}/> : <FaIcon {...icon} />}
                    </Icon>
                )}
                {this.props.children}
            </span>
        );
    }
}
