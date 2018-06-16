import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Alignment, bulma as PaginationStyle, HTMLComponent, HTMLNavProps, Size, sizeValues} from '../../';

export interface PaginationProps extends HTMLNavProps {
    alignment?: string | Alignment;
    bSize?: string | Size;
    isCentered?: boolean;
    isRight?: boolean;
    isRounded?: boolean;
    elementRef?: (ref: any) => any;
}

export default class Pagination extends React.Component<PaginationProps, {}> {

    public static propTypes = {
        ...HTMLComponent.propTypes,
        alignment: PropTypes.string,
        bSize: PropTypes.oneOf(sizeValues),
        isCentered: PropTypes.bool,
        isRight: PropTypes.bool,
        isRounded: PropTypes.bool,
        elementRef: PropTypes.func
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isCentered: false,
        isRight: false
    };

    public render(): JSX.Element {

        const {isCentered, isRight, bSize, alignment, isRounded, className, children, elementRef, ...props} = this.props;

        const classNames = ClassNames(
            PaginationStyle.pagination,
            PaginationStyle[bSize],
            PaginationStyle[alignment],
            className,
            {[`${PaginationStyle.isRounded}`]: isRounded},
            {[`${PaginationStyle.isCentered}`]: isCentered},
            {[`${PaginationStyle.isRight}`]: isRight},
        );

        return (
            <nav ref={elementRef} role="navigation" aria-label="pagination" className={classNames} {...props}>
                {children}
            </nav>
        );
    }
}


