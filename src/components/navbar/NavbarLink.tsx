import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as NavbarStyle, HTMLAProps, HTMLComponent} from '../../';

export interface NavbarLinkProps extends HTMLAProps {
    href?: string;
    elementRef?: any;
}

export default class NavbarLink extends React.Component<NavbarLinkProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        href: PropTypes.string
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames([NavbarStyle.navbarLink, className]);

        return (
            <a className={classNames} {...inputProps}  ref={elementRef}>
                {children}
            </a>
        );
    }
}
