import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as PaginationStyle, HTMLComponent, HTMLUlProps} from '../../';

export interface PaginationListProps extends HTMLUlProps {
    elementRef?: (ref: any) => any;
}

export default class PaginationList extends React.Component<PaginationListProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...props} = this.props;

        const classNames = ClassNames([
            PaginationStyle.paginationList,
            className
        ]);

        return (
            <ul ref={elementRef} className={classNames} {...props}>
                {children}
            </ul>
        );
    }
}

