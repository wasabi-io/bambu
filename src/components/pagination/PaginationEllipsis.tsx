import * as ClassNames from 'classnames';
import * as React from 'react';

import HTMLComponent, {HTMLSpanProps} from '../../base/html/HTML';
import PaginationStyle from './PaginationStyle';

export interface PaginationEllipsisProps extends HTMLSpanProps {
}

const PaginationEllipsis: React.SFC<PaginationEllipsisProps> = (props: PaginationEllipsisProps) => {
    const {className, ...paginationEllipsisProps} = props;

    const classNames = ClassNames(
        PaginationStyle.paginationEllipsis,
        className
    );
    return (
        <li><span className={classNames}>&hellip;</span></li>
    );
};

PaginationEllipsis.propTypes = HTMLComponent.propTypes;
PaginationEllipsis.defaultProps = HTMLComponent.defaultProps;
PaginationEllipsis.displayName = 'PaginationEllipsis';
export default PaginationEllipsis;
