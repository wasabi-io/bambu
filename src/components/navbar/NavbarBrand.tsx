import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as NavbarStyle, HTMLComponent, HTMLDivProps} from "../../";

export interface NavbarBrandProps extends HTMLDivProps {
    hasShadow?: boolean;
    elementRef?: (ref: any) => any;
}

export default class NavbarBrand extends React.Component<NavbarBrandProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        hasShadow: PropTypes.bool,
        elementRef: PropTypes.func
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        hasShadow: false,
    };

    public render(): JSX.Element {
        const {hasShadow, className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames(NavbarStyle.navbarBrand, {[`${NavbarStyle.hasShadow}`]: hasShadow}, className);

        return (
            <div className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}
