import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import HTMLComponent, {HTMLDivProps} from '../../base/html/HTML';

/**
 * Refers Html Props and Additional Props.
 */
export interface DropdownTriggerProps extends HTMLDivProps {
    elementRef?: (ref: any) => any;
}

export default class DropdownTrigger extends React.Component<DropdownTriggerProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {children, className, elementRef, ...ownProps} = this.props;

        const classNames = ClassNames(
            'dropdown-trigger',
            className
        );

        return (
            <div className={classNames} {...ownProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}
