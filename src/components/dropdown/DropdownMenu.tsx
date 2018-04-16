import * as ClassNames from 'classnames';
import * as React from 'react';
import * as PropTypes from 'prop-types';

import HTMLComponent, {HTMLDivProps} from '../../base/html/HTML';
import DropdownStyle from '../../base/css/bulma';

/**
 * Refers Html Props and Additional Props.
 */
export interface DropdownMenuProps extends HTMLDivProps {
}

const DropdownMenu: React.SFC<DropdownMenuProps> = (props: DropdownMenuProps) => {
    const {children, className, ...ownProps} = props;

    const classNames = ClassNames(
        DropdownStyle.dropdownMenu,
        className
    );

    return (
        <div className={classNames} {...ownProps}>
            {children}
        </div>
    );
};

DropdownMenu.propTypes = {
    ...HTMLComponent.propTypes,
}

DropdownMenu.defaultProps = HTMLComponent.defaultProps;

DropdownMenu.displayName = 'DropdownMenu';

export default DropdownMenu;
