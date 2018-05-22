import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {Props} from "wasabi-common";
import {Alignment, bulma as PaginationStyle, HTMLComponent, HTMLNavProps, Size, sizeValues} from '../../';

export interface PaginationProps extends HTMLNavProps {
    alignment?: string | Alignment;
    bSize?: string | Size;
    centered: boolean;
    isRounded?: boolean;
    previous?: boolean;
    previousText?: string;
    next?: boolean;
    nextText?: string;
    elementRef?: (ref: any) => any;
}

export default class Pagination extends React.Component<PaginationProps, {}> {

    public static propTypes: Props<PropTypes.Requireable<any> | PropTypes.Validator<any>> = {
        ...HTMLComponent.propTypes,
        alignment: PropTypes.string,
        bSize: PropTypes.oneOf(sizeValues),
        centered: PropTypes.bool,
        isRounded: PropTypes.bool,
        previous: PropTypes.bool,
        previousText: PropTypes.string,
        next: PropTypes.bool,
        nextText: PropTypes.string,
    };

    public static defaultProps = {
        ...HTMLComponent.defaultProps,
        centered: true,
        previous: true,
        previousText: 'Previous',
        next: true,
        nextText: 'Next'
    };

    public render(): JSX.Element {
        const {
            centered,
            previous,
            previousText,
            next,
            nextText,
            bSize,
            alignment,
            isRounded,
            className,
            children,
            elementRef,
            ...paginationProps
        } = this.props;

        const classNames = ClassNames(
            PaginationStyle.pagination,
            PaginationStyle[bSize],
            PaginationStyle[alignment],
            className,
            {[`${PaginationStyle.isRounded}`]: isRounded},
            {[`${PaginationStyle.isCentered}`]: centered},
        );

        return (
            <nav role="navigation" aria-label="pagination" className={classNames} {...paginationProps} ref={elementRef}>
                {previous && <a className={PaginationStyle.paginationPrevious}>{previousText}</a>}
                {next && <a className={PaginationStyle.paginationNext}>{nextText}</a>}
                {children}
            </nav>
        );
    }
}


