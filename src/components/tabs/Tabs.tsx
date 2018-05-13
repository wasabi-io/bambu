import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import Objects from 'wasabi-common/lib/types/Objects';
import {Alignment, alignmentValues, bulma as TabsStyle, HTMLComponent, HTMLDivProps, Size, sizeValues} from '../../';

export enum tabsStyle { boxed = 'isBoxed', toggle = 'isToggle' }

export interface TabsProps extends HTMLDivProps {
    alignment?: string | Alignment;
    isFullwidth?: boolean;
    bSize?: string | Size;
    tabStyle?: string | tabsStyle;
}

const Tabs: React.SFC<TabsProps> = (props: TabsProps) => {

    const {isFullwidth, alignment, bSize, tabStyle, className, ...inputProps} = props;

    const classNames = ClassNames(
        TabsStyle.tabs,
        TabsStyle[alignment],
        TabsStyle[bSize],
        TabsStyle[tabStyle],
        {
            [`${TabsStyle.isFullwidth}`]: isFullwidth,
        },
        className
    );

    return (
        <div className={classNames} {...inputProps}>
            <ul>
                {props.children}
            </ul>
        </div>
    );
};

Tabs.propTypes = {
    ...HTMLComponent.propTypes,
    alignment: PropTypes.oneOf(alignmentValues),
    isFullwidth: PropTypes.bool,
    bSize: PropTypes.oneOf(sizeValues),
    tabStyle: PropTypes.oneOf(Objects.values(tabsStyle))
};

Tabs.defaultProps = {
    ...HTMLComponent.defaultProps,
    isFullwidth: false
};

Tabs.displayName = 'Tabs';

export default Tabs;
