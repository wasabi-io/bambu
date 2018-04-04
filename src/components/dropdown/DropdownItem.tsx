import * as ClassNames from 'classnames';
import * as React from 'react';
import * as PropTypes from 'prop-types';

import HTMLComponent, {HTMLDivProps} from '../../base/html/HTML';
import DropdownStyle from './DropdownStyle';

/**
 * Refers Html Props and Additional Props.
 */
export interface DropdownItemProps extends HTMLDivProps {
    tagName?: string,
    isActive?: boolean,
}

const DropdownItem: React.SFC<DropdownItemProps> = (props: DropdownItemProps) => {
    const {tagName, isActive, children, className, ...ownProps} = props;

    const classNames = ClassNames(
        DropdownStyle.dropdownItem,
        isActive ? DropdownStyle.isActive : undefined,
        className
    );

    return React.createElement(tagName, {
        className: classNames,
        ...ownProps
    }, children);
};

DropdownItem.propTypes = {
    ...HTMLComponent.propTypes,
    tagName: PropTypes.string,
    isActive: PropTypes.bool,
}

DropdownItem.defaultProps = {
    ...HTMLComponent.defaultProps,
    tagName: 'a',
    isActive: false,
};

DropdownItem.displayName = 'DropdownItem';

export default DropdownItem;
