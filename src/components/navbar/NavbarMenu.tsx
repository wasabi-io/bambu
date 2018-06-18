import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as NavbarStyle, HTMLComponent, HTMLDivProps} from "../../";

export interface NavbarMenuProps extends HTMLDivProps {
    isActive?: boolean;
    elementRef?: (ref: any) => any;
}

export default class NavbarMenu extends React.Component<NavbarMenuProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool,
        elementRef: PropTypes.func
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false
    };

    public render(): JSX.Element {
        const {isActive, className, elementRef, children, ...navbarMenuProps} = this.props;

        const classNames = ClassNames(NavbarStyle.navbarMenu, {[`${NavbarStyle.isActive}`]: isActive,}, className);

        return (
            <div className={classNames} {...navbarMenuProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}

