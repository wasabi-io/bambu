import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Objects} from 'wasabi-common';
import {Alignment, alignmentValues, bulma as TabsStyle, HTMLComponent, HTMLDivProps, Size, sizeValues} from '../../';

export enum tabsStyle { boxed = 'isBoxed', toggle = 'isToggle' }

export interface TabsProps extends HTMLDivProps {
    alignment?: string | Alignment;
    isFullwidth?: boolean;
    bSize?: string | Size;
    tabStyle?: string | tabsStyle;
    isCentered?: boolean;
    isRight?: boolean;
    isBoxed?: boolean;
    isToggle?: boolean;
    isToggleRounded?: boolean;
    elementRef?: (ref: any) => any;
}

export default class Tabs extends React.Component<TabsProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        alignment: PropTypes.oneOf(alignmentValues),
        isFullwidth: PropTypes.bool,
        bSize: PropTypes.oneOf(sizeValues),
        tabStyle: PropTypes.oneOf(Objects.values(tabsStyle)),
        isCentered: PropTypes.bool,
        isRight: PropTypes.bool,
        isBoxed: PropTypes.bool,
        isToggle: PropTypes.bool,
        isToggleRounded: PropTypes.bool
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isFullwidth: false
    };

    public render(): JSX.Element {
        const {isFullwidth, alignment, bSize, tabStyle, isCentered, isRight, isBoxed, isToggle, isToggleRounded, className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames(
            TabsStyle.tabs,
            TabsStyle[alignment],
            TabsStyle[bSize],
            TabsStyle[tabStyle],
            {[`${TabsStyle.isFullwidth}`]: isFullwidth},
            {[`${TabsStyle.isCentered}`]: isCentered},
            {[`${TabsStyle.isRight}`]: isRight},
            {[`${TabsStyle.isBoxed}`]: isBoxed},
            {[`${TabsStyle.isToggle}`]: isToggle},
            {[`${TabsStyle.isToggleRounded}`]: isToggleRounded},
            className
        );

        return (
            <div className={classNames} {...inputProps} ref={elementRef}>
                <ul>
                    {children}
                </ul>
            </div>
        );
    }
}
