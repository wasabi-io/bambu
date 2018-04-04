import * as ClassNames from 'classnames';
import * as React from 'react';
import * as PropTypes from 'prop-types';

import HTMLComponent, {HTMLDivProps} from '../../base/html/HTML';
import DropdownStyle from './DropdownStyle';

/**
 * Refers Html Props and Additional Props.
 */
export interface DropdownContentProps extends HTMLDivProps {
}

const DropdownContent: React.SFC<DropdownContentProps> = (props: DropdownContentProps) => {
    const {children, className, ...ownProps} = props;

    const classNames = ClassNames(
        DropdownStyle.dropdownContent,
        className
    );

    return (
        <div className={classNames} {...ownProps}>
            {children}
        </div>
    );
};

DropdownContent.propTypes = {
    ...HTMLComponent.propTypes,
}

DropdownContent.defaultProps = HTMLComponent.defaultProps;

DropdownContent.displayName = 'DropdownContent';

export default DropdownContent;
