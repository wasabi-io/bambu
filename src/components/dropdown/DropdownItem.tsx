import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as DropdownStyle, HTMLComponent, HTMLDivProps} from '../../';
/**
 * Refers Html Props and Additional Props.
 */
export interface DropdownItemProps extends HTMLDivProps {
    tagName?: string;
    isActive?: boolean;
}

const DropdownItem: React.SFC<DropdownItemProps> = (props: DropdownItemProps) => {
    const { tagName, isActive, children, className, ...ownProps } = props;

    const classNames = ClassNames(
        DropdownStyle.dropdownItem,
        {
            [`${DropdownStyle.isActive}`]: isActive
        },
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
};

DropdownItem.defaultProps = {
    ...HTMLComponent.defaultProps,
    tagName: 'a',
    isActive: false,
};

DropdownItem.displayName = 'DropdownItem';

export default DropdownItem;
