import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as NavbarStyle, HTMLComponent, HTMLDivProps} from "../../";

export interface NavbarDropdownProps extends HTMLDivProps {
    isActive?: boolean;
    isBoxed?: boolean;
    isRight?: boolean;
}

export default class NavbarDropdown extends React.Component<NavbarDropdownProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool,
        isBoxed: PropTypes.bool,
        isRight: PropTypes.bool
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false,
        isBoxed: false,
        isRight: false
    };

    public render(): JSX.Element {
        const {isActive, isBoxed, isRight, className, children, ...inputProps} = this.props;

        const classNames = ClassNames(
            NavbarStyle.navbarDropdown,
            {
                [`${NavbarStyle.isActive}`]: isActive,
                [`${NavbarStyle.isBoxed}`]: isBoxed,
                [`${NavbarStyle.isRight}`]: isRight,
            },
            className
        );

        return (
            <div className={classNames} {...inputProps}>
                {children}
            </div>
        );
    }
}
