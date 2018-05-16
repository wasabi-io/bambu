import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as NavbarStyle, HTMLComponent, HTMLDivProps} from "../../";

export interface NavbarMenuProps extends HTMLDivProps {
    isActive?: boolean;
}

export default class NavbarMenu extends React.Component<NavbarMenuProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false
    };

    public render(): JSX.Element {
        const {isActive, className, children, ...navbarMenuProps} = this.props;

        const classNames = ClassNames(NavbarStyle.navbarMenu, {[`${NavbarStyle.isActive}`]: isActive,}, className);

        return (
            <div className={classNames} {...navbarMenuProps}>
                {children}
            </div>
        );
    }
}

