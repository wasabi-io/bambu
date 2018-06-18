import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as NavbarStyle, HTMLComponent, HTMLDivProps} from "../../";

export interface NavbarDropdownProps extends HTMLDivProps {
    isActive?: boolean;
    isBoxed?: boolean;
    isRight?: boolean;
    elementRef?: (ref: any) => any;
}

export default class NavbarDropdown extends React.Component<NavbarDropdownProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool,
        isBoxed: PropTypes.bool,
        isRight: PropTypes.bool,
        elementRef: PropTypes.func
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false,
        isBoxed: false,
        isRight: false
    };

    public render(): JSX.Element {
        const {isActive, isBoxed, isRight, className, children, elementRef, ...inputProps} = this.props;

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
            <div className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}
