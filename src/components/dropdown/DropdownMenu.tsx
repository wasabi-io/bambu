import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as DropdownStyle, HTMLComponent, HTMLDivProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface DropdownMenuProps extends HTMLDivProps {
    elementRef?: (ref: any) => any;
}

export default class DropdownMenu extends React.Component<DropdownMenuProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {...HTMLComponent.propTypes};
;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {children, className, elementRef, ...ownProps} = this.props;

        const classNames = ClassNames(
            DropdownStyle.dropdownMenu,
            className
        );

        return (
            <div className={classNames} {...ownProps}  ref={elementRef}>
                {children}
            </div>
        );
    }
}
