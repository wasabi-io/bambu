import * as ClassNames from 'classnames';
import * as React from 'react';
import { Alignment, Size } from 'rebul/lib/base/css';

import HTMLComponent, { HTMLNavProps } from '../../base/html/HTML';
import PaginationStyle from './PaginationStyle';

export interface PaginationProps extends HTMLNavProps {
  alignment?: string | Alignment;
  size?: string | Size;
  isRounded?: boolean;
  previous?: boolean;
  previousText?: string;
  next?: boolean;
  nextText?: string;
}
const Pagination: React.SFC<PaginationProps> = (props: PaginationProps) => {

  const { previous, previousText, next, nextText, size, alignment, isRounded, className, ...paginationProps } = props;

  const classNames = ClassNames(
    PaginationStyle.pagination,
    PaginationStyle[size],
    PaginationStyle[alignment],
    className,
    { [`${PaginationStyle.isRounded}`]: isRounded },
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
  ...HTMLComponent.propTypes
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
