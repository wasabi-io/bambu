import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Objects, Props} from 'wasabi-common';
import {Alignment, alignmentValues, bulma as TabsStyle, HTMLComponent, HTMLDivProps, Size, sizeValues} from '../../';

export enum tabsStyle { boxed = 'isBoxed', toggle = 'isToggle' }

export interface TabsProps extends HTMLDivProps {
    alignment?: string | Alignment;
    isFullwidth?: boolean;
    bSize?: string | Size;
    tabStyle?: string | tabsStyle;
}

export default class Tabs extends React.Component<TabsProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        alignment: PropTypes.oneOf(alignmentValues),
        isFullwidth: PropTypes.bool,
        bSize: PropTypes.oneOf(sizeValues),
        tabStyle: PropTypes.oneOf(Objects.values(tabsStyle))
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isFullwidth: false
    };

    public render(): JSX.Element {
        const {isFullwidth, alignment, bSize, tabStyle, className, children, ...inputProps} = this.props;

        const classNames = ClassNames(
            TabsStyle.tabs,
            TabsStyle[alignment],
            TabsStyle[bSize],
            TabsStyle[tabStyle],
            {[`${TabsStyle.isFullwidth}`]: isFullwidth},
            className
        );

        return (
            <div className={classNames} {...inputProps}>
                <ul>
                    {children}
                </ul>
            </div>
        );
    }
}
