import * as ClassNames from 'classnames';
import * as React from 'react';
import * as PropTypes from 'prop-types';

import HTMLComponent, {HTMLDivProps} from '../../base/html/HTML';
import {Icon} from '../../elements/icon';
import DropdownStyle from '../../base/css/bulma';

/**
 * Refers Html Props and Additional Props.
 */
export interface DropdownTriggerProps extends HTMLDivProps {
}

const DropdownTrigger: React.SFC<DropdownTriggerProps> = (props: DropdownTriggerProps) => {
    const {children, className, ...ownProps} = props;

    const classNames = ClassNames(
        'dropdown-trigger',
        className
    );

    return (
        <div className={classNames} {...ownProps}>
            {children}
        </div>
    );
};

DropdownTrigger.propTypes = {
    ...HTMLComponent.propTypes,
}

DropdownTrigger.defaultProps = HTMLComponent.defaultProps;

DropdownTrigger.displayName = 'DropdownTrigger';

export default DropdownTrigger;
