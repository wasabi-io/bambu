import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as NavbarStyle, HTMLAProps, HTMLComponent} from '../../';

export interface NavbarLinkProps extends HTMLAProps {
    href?: string;
    elementRef?: (ref: any) => any;
}

export default class NavbarLink extends React.Component<NavbarLinkProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        href: PropTypes.string,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames([NavbarStyle.navbarLink, className]);

        return (
            <a className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </a>
        );
    }
}
