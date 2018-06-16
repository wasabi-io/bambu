import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as MenuStyle, HTMLAsideProps, HTMLComponent} from '../../';

export interface MenuProps extends HTMLAsideProps {
    elementRef?: (ref: any) => any;
}

export default class Menu extends React.Component<MenuProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames([MenuStyle.menu, className]);

        return (
            <aside className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </aside>
        );
    }
}
