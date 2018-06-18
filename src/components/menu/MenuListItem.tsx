import * as PropTypes from 'prop-types';
import * as React from 'react';
import {HTMLComponent, HTMLLiProps} from '../../';

export interface MenuListItemProps extends HTMLLiProps {
    elementRef?: (ref: any) => any;
}

/**
 * Is used like <code>{&lt;Menu /&gt;}</code> for child components.
 */
export default class MenuListItem extends React.Component<MenuListItemProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {children, elementRef, ...inputProps} = this.props;

        return (
            <li {...inputProps} ref={elementRef}>
                {children}
            </li>
        );
    }
}

