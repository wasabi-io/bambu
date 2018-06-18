import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as MenuStyle, HTMLAProps, HTMLComponent, HTMLLiProps} from '../../';

export interface MenuLinkProps extends HTMLAProps {
    isActive?: boolean;
    elementRef?: (ref: any) => any;
    parentClassName?: string;
    parent?: HTMLLiProps;
}

/**
 * Is a menu item or menu label for child components.
 */
export default class MenuLink extends React.Component<MenuLinkProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool,
        parent: PropTypes.object,
        parentClassName: PropTypes.string,
        elementRef: PropTypes.func
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isActive: false
    };

    public render(): JSX.Element {
        const {isActive, className, parentClassName, parent, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames({[`${MenuStyle.isActive}`]: isActive}, className);

        return (
            <li className={parentClassName} {...parent}>
                <a className={classNames} {...inputProps} ref={elementRef}>
                    {children}
                </a>
            </li>
        );
    }
}
