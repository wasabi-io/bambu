import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as DropdownStyle, HTMLComponent, HTMLHrProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface DropdownDividerProps extends HTMLHrProps {
    elementRef?: (ref: any) => any;
}

export default class DropdownDivider extends React.Component<DropdownDividerProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {...HTMLComponent.propTypes};
;

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
