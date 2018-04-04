import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import HTMLComponent, {HTMLLiProps} from '../../base/html/HTML';
import TabsStyle from './TabsStyle';

export interface TabProps extends HTMLLiProps {
    isActive?: boolean;
}

const Tab: React.SFC<TabProps> = (props: TabProps) => {

    const {isActive, className, ...inputProps} = props;

    const classNames = ClassNames(
        {
            [`${TabsStyle.isActive}`]: isActive,
        },
        className
    );

    return (
        <li className={classNames} {...inputProps}>
            {props.children}
        </li>
    );
};

Tab.propTypes = {
    ...HTMLComponent.propTypes,
    isActive: PropTypes.bool
};

Tab.defaultProps = {
    ...HTMLComponent.defaultProps,
    isActive: false,
};

Tab.displayName = 'Tab';

export default Tab;
