import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as NavbarStyle, HTMLAllAttributes, HTMLComponent} from "../../";

export interface NavbarItemLinkProps extends HTMLAllAttributes {
    isActive?: boolean;
    isHiddenDesktop?: boolean;
    isHiddenMobile?: boolean;
    elementRef?: (ref: any) => any;
}


export default class NavbarItemLink extends React.Component<NavbarItemLinkProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool,
        isHiddenDesktop: PropTypes.bool,
        isHiddenMobile: PropTypes.bool
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false,
        isHiddenDesktop: false,
        isHiddenMobile: false
    };

    public render(): JSX.Element {
        const {isActive, isHiddenDesktop, isHiddenMobile, className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames(
            NavbarStyle.navbarItem,
            {
                [`${NavbarStyle.isActive}`]: isActive,
                [`${NavbarStyle.isHiddenDesktop}`]: isHiddenDesktop,
                [`${NavbarStyle.isHiddenMobile}`]: isHiddenMobile
            },
            className
        );

        return (
            <a className={classNames} {...inputProps}  ref={elementRef}>
                {children}
            </a>
        );
    }
}
