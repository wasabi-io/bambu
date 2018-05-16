import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as PaginationStyle, HTMLComponent, HTMLSpanProps} from '../../';

export interface PaginationEllipsisProps extends HTMLSpanProps {
    elementRef?: any;
}

export default class PaginationEllipsis extends React.Component<PaginationEllipsisProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = HTMLComponent.propTypes;

    public static defaultProps = HTMLComponent.defaultProps;

    public render(): JSX.Element {
        const {className, elementRef, ...paginationEllipsisProps} = this.props;

        const classNames = ClassNames(PaginationStyle.paginationEllipsis, className);

        return (
            <li><span className={classNames} {...paginationEllipsisProps} ref={elementRef}>&hellip;</span></li>
        );
    }
}

