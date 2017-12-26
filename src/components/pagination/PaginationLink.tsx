import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import HTMLComponent, { HTMLAProps } from '../../base/html/HTML';
import PaginationStyle from './PaginationStyle';

export interface PaginationLinkProps extends HTMLAProps {
    isCurrent?: boolean;
    page: string | number;
}
const PaginationLink: React.SFC<PaginationLinkProps> = (props: PaginationLinkProps) => {
    const { page, isCurrent, className, ...paginationLinkProps } = props;

    const classNames = ClassNames(
        PaginationStyle.paginationLink,
        className,
        {
            [`${PaginationStyle.isCurrent}`]: isCurrent,
        });
    return (
        <li>
            <a className={classNames} aria-label={`Goto Page ${page}`}>{page}</a>
        </li>
    );
};

PaginationLink.propTypes = {
    ...HTMLComponent.propTypes,
    isCurrent: PropTypes.bool,
    page: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
};

PaginationLink.defaultProps = {
    ...HTMLComponent.defaultProps,
    isCurrent: false,
};

PaginationLink.displayName = "PaginationLink";

export default PaginationLink;
