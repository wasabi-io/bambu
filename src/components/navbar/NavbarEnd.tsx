import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as NavbarStyle, HTMLComponent, HTMLDivProps} from "../../";

export interface NavbarEndProps extends HTMLDivProps {
    elementRef?: any;
}

export default class NavbarEnd extends React.Component<NavbarEndProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...navbarEndProps} = this.props;

        const classNames = ClassNames(NavbarStyle.navbarEnd, className);

        return (
            <div className={classNames} {...navbarEndProps}  ref={elementRef}>
                {children}
            </div>
        );
    }
}
