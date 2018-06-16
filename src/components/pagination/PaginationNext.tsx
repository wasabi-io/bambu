import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as PaginationStyle, HTMLAProps, HTMLComponent} from '../../';

export interface PaginationNextProps extends HTMLAProps {
    disabled?: boolean;
    elementRef?: (ref: any) => any;
}

export default class PaginationNext extends React.Component<PaginationNextProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        disabled: PropTypes.bool,
        elementRef: PropTypes.func
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        disabled: false
    };

    public render(): JSX.Element {
        const {className, elementRef, children, ...props} = this.props;

        const classNames = ClassNames(PaginationStyle.paginationNext, className);

        return (
            <a ref={elementRef} className={classNames} {...props}>
                {children}
            </a>
        );
    }
}
