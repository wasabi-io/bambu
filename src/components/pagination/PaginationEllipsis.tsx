import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma as PaginationStyle, HTMLComponent, HTMLSpanProps} from '../../';

export interface PaginationEllipsisProps extends HTMLSpanProps {
    elementRef?: (ref: any) => any;
}

export default class PaginationEllipsis extends React.Component<PaginationEllipsisProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        elementRef: PropTypes.func
    };

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, elementRef, children, ...props} = this.props;

        const classNames = ClassNames(PaginationStyle.paginationEllipsis, className);

        return (
            <li>
                <span ref={elementRef} className={classNames} {...props}>
                    &hellip;
                </span>
            </li>
        );
    }
}
