import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as MenuStyle, HTMLComponent, HTMLPProps} from '../../';

export interface MenuLabelProps extends HTMLPProps {
}

export default class MenuLabel extends React.Component<MenuLabelProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, ...inputProps} = this.props;

        const classNames = ClassNames([MenuStyle.menuLabel, className]);

        return (
            <p className={classNames} {...inputProps} >
                {children}
            </p>
        );
    }
}
