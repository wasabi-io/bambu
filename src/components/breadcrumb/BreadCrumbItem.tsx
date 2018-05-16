import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as BreadCrumbStyle, HTMLAProps, HTMLComponent} from '../../';

export interface BreadCrumbItemProps extends HTMLAProps {
    isActive?: boolean;
}

export default class BreadCrumbItem extends React.Component<BreadCrumbItemProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {isActive, children, ...breadCrumbItemProps} = this.props;

        const classNames = ClassNames(
            {
                [`${BreadCrumbStyle.isActive}`]: isActive,
            }
        );

        return (
            <li className={classNames}>
                <a {...breadCrumbItemProps}>
                    {children}
                </a>
            </li>
        );
    }
}
