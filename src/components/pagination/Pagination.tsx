import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Alignment, bulma as PaginationStyle, HTMLComponent, HTMLNavProps, Size, sizeValues} from '../../';

export interface PaginationProps extends HTMLNavProps {
    alignment?: string | Alignment;
    bSize?: string | Size;
    isRounded?: boolean;
    previous?: boolean;
    previousText?: string;
    next?: boolean;
    nextText?: string;
}

const Pagination: React.SFC<PaginationProps> = (props: PaginationProps) => {

    const {previous, previousText, next, nextText, bSize, alignment, isRounded, className, ...paginationProps} = props;

    const classNames = ClassNames(
        PaginationStyle.pagination,
        PaginationStyle[bSize],
        PaginationStyle[alignment],
        className,
        {[`${PaginationStyle.isRounded}`]: isRounded},
    );

    return (
        <nav role="navigation" aria-label="pagination" className={classNames} {...paginationProps}>
            {previous && <a className={PaginationStyle.paginationPrevious}>{previousText}</a>}
            {next && <a className={PaginationStyle.paginationNext}>{nextText}</a>}
            {props.children}
        </nav>
    );
};

Pagination.propTypes = {
    ...HTMLComponent.propTypes,
    alignment: PropTypes.string,
    bSize: PropTypes.oneOf(sizeValues),
    isRounded: PropTypes.bool,
    previous: PropTypes.bool,
    previousText: PropTypes.string,
    next: PropTypes.bool,
    nextText: PropTypes.string,
};

Pagination.defaultProps = {
    ...HTMLComponent.defaultProps,
    previous: true,
    previousText: 'Previous',
    next: true,
    nextText: 'Next'
};

Pagination.displayName = 'Pagination';

export default Pagination;
