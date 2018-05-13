import * as ClassNames from 'classnames';
import * as React from 'react';
import {bulma as PaginationStyle, HTMLComponent, HTMLUlProps} from '../../';

export interface PaginationListProps extends HTMLUlProps {
}

const PaginationList: React.SFC<PaginationListProps> = (props: PaginationListProps) => {
    const {className, ...paginationListProps} = props;
    const classNames = ClassNames([
        PaginationStyle.paginationList,
        className
    ]);
    return (
        <ul className={className} {...paginationListProps}>
            {props.children}
        </ul>
    );
};

PaginationList.propTypes = HTMLComponent.propTypes;
PaginationList.defaultProps = HTMLComponent.defaultProps;
PaginationList.displayName = 'PaginationList';

export default PaginationList;
