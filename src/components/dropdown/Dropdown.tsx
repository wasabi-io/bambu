import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';
import {bulma as DropdownStyle, HTMLComponent, HTMLDivProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface DropdownProps extends HTMLDivProps {
    isActive?: boolean;
    isHoverable?: boolean;
    isRight?: boolean;
    isUp?: boolean;
}

export default class Dropdown extends Stateless<DropdownProps> {
    public dropdownRef: HTMLDivElement;

    public static propTypes = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool,
        isHoverable: PropTypes.bool,
        isRight: PropTypes.bool,
        isUp: PropTypes.bool
    };

    public static defaultProps = HTMLComponent.defaultProps;

    constructor(props: DropdownProps) {
        super(props);
        this.onDropDown = this.onDropDown.bind(this);
    }

    public onDropDown(e: any) {
        e.stopPropagation();
        this.dropdownRef.classList.toggle(DropdownStyle.isActive);
    }

    public render() {
        const {children, className, isActive, isHoverable, isRight, isUp, ...dropdownProps} = this.props;
        const classNames = ClassNames(
            DropdownStyle.dropdown,
            {
                [`${DropdownStyle.isActive}`]: isActive,
                [`${DropdownStyle.isHoverable}`]: isHoverable,
                [`${DropdownStyle.isRight}`]: isRight,
                [`${DropdownStyle.isUp}`]: isUp,
            },
            className
        );

        return (
            <div
                className={classNames}
                {...dropdownProps}
                ref={ref => this.dropdownRef = ref}
                onClick={this.onDropDown}
            >
                {children}
            </div>
        );
    }
}
