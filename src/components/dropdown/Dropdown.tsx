import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as DropdownStyle, HTMLComponent, HTMLDivProps} from '../../';

export interface DropdownProps extends HTMLDivProps {
    isActive?: boolean;
    isHoverable?: boolean;
    isRight?: boolean;
    isUp?: boolean;
    elementRef?: (ref: any) => any;
}

/**
 * Is a container for a <code>{&lt;DropdownTrigger />} and a {<DropdownMenu /&gt;}</code>.
 */
export default class Dropdown extends React.Component<DropdownProps> {
    public static propTypes = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool,
        isHoverable: PropTypes.bool,
        isRight: PropTypes.bool,
        isUp: PropTypes.bool,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    constructor(props: DropdownProps) {
        super(props);
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
                ref={elementRef}
                {...dropdownProps}
            >
                {children}
            </div>
        );
    }
}
