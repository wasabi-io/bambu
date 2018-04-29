import * as ClassNames from 'classnames';
import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';

import DropdownStyle from '../../base/css/bulma';
import HTMLComponent, { HTMLDivProps } from '../../base/html/HTML';

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
    dropdownRef: HTMLDivElement;

    constructor(props: DropdownProps) {
        super(props);
        this.onDropDown = this.onDropDown.bind(this);
    }

    onDropDown(e: any) {
        e.stopPropagation();
        this.dropdownRef.classList.toggle(DropdownStyle.isActive);
    }

    render() {
        const { children, className, isActive, isHoverable, isRight, isUp, ...dropdownProps } = this.props;
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
