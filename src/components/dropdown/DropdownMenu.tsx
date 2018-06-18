import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as DropdownStyle, HTMLComponent, HTMLDivProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface DropdownMenuProps extends HTMLDivProps {
    elementRef?: (ref: any) => any;
}

/**
 * The toggable menu, hidden by default in <code>{&lt;Dropdown /&gt;}</code> component.
 */
export default class DropdownMenu extends React.Component<DropdownMenuProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {children, className, elementRef, ...ownProps} = this.props;

        const classNames = ClassNames(
            DropdownStyle.dropdownMenu,
            className
        );

        return (
            <div className={classNames} {...ownProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}
