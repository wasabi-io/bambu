import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as PaginationStyle, HTMLComponent, HTMLUlProps} from '../../';

export interface PaginationListProps extends HTMLUlProps {
    elementRef?: any;
}

export default class PaginationList extends React.Component<PaginationListProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, children, elementRef, ...paginationListProps} = this.props;
        const classNames = ClassNames([
            PaginationStyle.paginationList,
            className
        ]);
        return (
            <ul className={classNames} {...paginationListProps} ref={elementRef}>
                {children}
            </ul>
        );
    }
}

