import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as DropdownStyle, HTMLComponent, HTMLHrProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface DropdownDividerProps extends HTMLHrProps {
    elementRef?: (ref: any) => any;
}

/**
 * A horizontal line to separate {<DropdownItem>} components.
 */
export default class DropdownDivider extends React.Component<DropdownDividerProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, elementRef, ...ownProps} = this.props;

        const classNames = ClassNames(
            DropdownStyle.dropdownDivider,
            className
        );

        return (
            <hr className={classNames} {...ownProps} ref={elementRef}/>
        );
    }
}
