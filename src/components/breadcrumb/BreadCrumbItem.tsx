import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as BreadCrumbStyle, HTMLAProps, HTMLComponent} from '../../';

export interface BreadCrumbItemProps extends HTMLAProps {
    isActive?: boolean;
    elementRef?: (ref: any) => any;
}

export default class BreadCrumbItem extends React.Component<BreadCrumbItemProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        isActive: PropTypes.bool,
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {isActive, elementRef, children, ...breadCrumbItemProps} = this.props;

        const classNames = ClassNames({[`${BreadCrumbStyle.isActive}`]: isActive});

        return (
            <li className={classNames}>
                <a {...breadCrumbItemProps} ref={elementRef}>
                    {children}
                </a>
            </li>
        );
    }
}
