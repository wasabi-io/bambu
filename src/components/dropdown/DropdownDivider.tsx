import * as ClassNames from 'classnames';
import * as React from 'react';
import {bulma as DropdownStyle, HTMLComponent, HTMLHrProps} from '../../';

/**
 * Refers Html Props and Additional Props.
 */
export interface DropdownDividerProps extends HTMLHrProps {
}

const DropdownDivider: React.SFC<DropdownDividerProps> = (props: DropdownDividerProps) => {
    const {className, ...ownProps} = props;

    const classNames = ClassNames(
        DropdownStyle.dropdownDivider,
        className
    );

    return (
        <hr className={classNames} {...ownProps} />
    );
};

DropdownDivider.propTypes = HTMLComponent.propTypes;

DropdownDivider.defaultProps = HTMLComponent.defaultProps;

DropdownDivider.displayName = 'DropdownDivider';

export default DropdownDivider;
