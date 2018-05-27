import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as MenuStyle, HTMLComponent, HTMLUlProps} from '../../';

export interface MenuListProps extends HTMLUlProps {
    elementRef?: (ref: any) => any;
}

export default class MenuList extends React.Component<MenuListProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...inputProps} = this.props;

        const classNames = ClassNames([MenuStyle.menuList, className]);

        return (
            <ul className={classNames} {...inputProps} ref={elementRef}>
                {children}
            </ul>
        );
    }
}

