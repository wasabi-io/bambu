import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Alignment, alignmentValues, bulma as TabGroupStyle, HTMLComponent, HTMLDivProps} from '../../';

export interface TabGroupProps extends HTMLDivProps {
    alignment?: string | Alignment;
}

const TabGroup: React.SFC<TabGroupProps> = (props: TabGroupProps) => {

    const {alignment, className, ...inputProps} = props;

    const classNames = ClassNames(
        TabGroupStyle[alignment],
        className
    );

    return (
        <div className={classNames} {...inputProps}>
            {props.children}
        </div>
    );
};

TabGroup.propTypes = {
    ...HTMLComponent.propTypes,
    alignment: PropTypes.oneOf(alignmentValues),
};

TabGroup.defaultProps = HTMLComponent.defaultProps;

TabGroup.displayName = 'TabGroup';

export default TabGroup;
