import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as NavbarStyle, HTMLComponent, HTMLDivProps} from "../../";

export interface NavbarBrandProps extends HTMLDivProps {
    hasShadow?: boolean;
}

export default class NavbarBrand extends React.Component<NavbarBrandProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        hasShadow: PropTypes.bool
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        hasShadow: false,
    };

    public render(): JSX.Element {
        const {hasShadow, className, children, ...inputProps} = this.props;

        const classNames = ClassNames(NavbarStyle.navbarBrand, {[`${NavbarStyle.hasShadow}`]: hasShadow}, className);

        return (
            <div className={classNames} {...inputProps}>
                {children}
            </div>
        );
    }
}
