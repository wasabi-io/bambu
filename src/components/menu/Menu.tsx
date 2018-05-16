import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as MenuStyle, HTMLAsideProps, HTMLComponent} from '../../';

export interface MenuProps extends HTMLAsideProps {
}

export default class Menu extends React.Component<MenuProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, ...inputProps} = this.props;

        const classNames = ClassNames([MenuStyle.menu, className]);

        return (
            <aside className={classNames} {...inputProps}>
                {children}
            </aside>
        );
    }
}
