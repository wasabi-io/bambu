import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {bulma as PaginationStyle, HTMLAProps, HTMLComponent} from '../../';

export interface PaginationLinkProps extends HTMLAProps {
    isCurrent?: boolean;
    page: string | number;
    arialLabel: string;
}

export default class PaginationLink extends React.Component<PaginationLinkProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        isCurrent: PropTypes.bool,
        page: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        isCurrent: false,
    };

    public render(): JSX.Element {
        const {isCurrent, className, children, ...paginationLinkProps} = this.props;

        const classNames = ClassNames(PaginationStyle.paginationLink, className, {[`${PaginationStyle.isCurrent}`]: isCurrent});

        return (<li><a className={classNames} {...paginationLinkProps}>{children}</a></li>);
    }
}


