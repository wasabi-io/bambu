import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as MenuStyle, HTMLComponent, HTMLPProps} from '../../';

export interface MenuLabelProps extends HTMLPProps {
    elementRef?: (ref: any) => any;
}

/**
 * Label for each top <code>{&lt;MenuList />} in {<Menu /&gt;}</code> component.
 */
export default class MenuLabel extends React.Component<MenuLabelProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames([MenuStyle.menuLabel, className]);

        return (
            <p className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </p>
        );
    }
}
