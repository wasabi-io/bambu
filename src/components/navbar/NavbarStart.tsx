import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as NavbarStyle, HTMLComponent, HTMLDivProps} from '../../';

export interface NavbarStartProps extends HTMLDivProps {
    elementRef?: (ref: any) => any;
}

export default class NavbarStart extends React.Component<NavbarStartProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...navbarStartProps} = this.props;
        const classNames = ClassNames(NavbarStyle.navbarStart, className);

        return (
            <div className={classNames} role="navigation" aria-label="main navigation" {...navbarStartProps} ref={elementRef}>
                {children}
            </div>
        );
    }
}
