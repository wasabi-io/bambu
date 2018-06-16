import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as PaginationStyle, HTMLAProps, HTMLComponent} from '../../';

export interface PaginationLinkProps extends HTMLAProps {
    isCurrent?: boolean;
    elementRef?: (ref: any) => any;
}

export default class PaginationLink extends React.Component<PaginationLinkProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        isCurrent: PropTypes.bool,
        elementRef: PropTypes.func
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isCurrent: false,
    };

    public render(): JSX.Element {

        const {isCurrent, className, children, elementRef, ...props} = this.props;

        const classNames = ClassNames(
            PaginationStyle.paginationLink,
            {[`${PaginationStyle.isCurrent}`]: isCurrent},
            className
        );

        return (
            <li>
                <a ref={elementRef} aria-label={`go to page ${children}`} className={classNames} {...props}>
                    {children}
                </a>
            </li>
        );
    }
}
