import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props, Strings} from "wasabi-common";
import {bulma as NavbarStyle, HTMLComponent, HTMLDivProps} from "../../";

export enum ShowingState {
    active = 'active',
    hoverable = 'hoverable'
}

export interface NavbarDropdownParentProps extends HTMLDivProps {
    isActive?: boolean;
    hasDropdownUp?: boolean;
    state?: ShowingState;
    elementRef?: any;
}

export default class NavbarDropdownParent extends React.Component<NavbarDropdownParentProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool,
        hasDropdownUp: PropTypes.bool
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false,
        hasDropdownUp: false
    };

    public render(): JSX.Element {
        const {isActive, hasDropdownUp, state, className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames(
            NavbarStyle.navbarItem,
            NavbarStyle.hasDropdown,
            {
                [`${NavbarStyle.isActive}`]: isActive,
                [`${NavbarStyle.hasDropdownUp}`]: hasDropdownUp,
                [`${NavbarStyle[`is${Strings.capitalizeFirstLetter(state)}`]}`]: Strings.has(state),
            },
            className
        );

        return (
            <div className={classNames} {...inputProps}  ref={elementRef}>
                {children}
            </div>
        );
    }
}

