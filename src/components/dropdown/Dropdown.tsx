import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';
import {Props} from "wasabi-common";
import {bulma as DropdownStyle, HTMLComponent, HTMLDivProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface DropdownProps extends HTMLDivProps {
    isActive?: boolean;
    isHoverable?: boolean;
    isRight?: boolean;
    isUp?: boolean;
    elementRef?: (ref: any) => any;
}

export default class Dropdown extends Stateless<DropdownProps> {
    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool,
        isHoverable: PropTypes.bool,
        isRight: PropTypes.bool,
        isUp: PropTypes.bool
    };
    public static defaultProps = HTMLComponent.defaultProps;
    public dropdownRef: HTMLDivElement;

    constructor(props: DropdownProps) {
        super(props);
        this.onDropDown = this.onDropDown.bind(this);
    }

    public onDropDown(e: any) {
        e.stopPropagation();
        this.dropdownRef.classList.toggle(DropdownStyle.isActive);
    }

    public render() {
        const {children, className, isActive, isHoverable, isRight, isUp, elementRef, ...dropdownProps} = this.props;
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
                ref={this.createRef}
                onClick={this.onDropDown}
            >
                {children}
            </div>
        );
    }

    private createRef = (ref: any) => {
        this.dropdownRef = ref;
        if (this.props.elementRef) {
            this.props.elementRef(ref);
        }
    }
}
