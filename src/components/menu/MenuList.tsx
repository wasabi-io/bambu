import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as MenuStyle, HTMLComponent, HTMLUlProps} from '../../';

export interface MenuListProps extends HTMLUlProps {
    elementRef?: (ref: any) => any;
}

/**
 * A group of menu items in <code>{&lt;Menu />} or in {<MenuListItem /&gt;}</code> components.
 */
export default class MenuList extends React.Component<MenuListProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames([MenuStyle.menuList, className]);

        return (
            <ul className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </ul>
        );
    }
}

