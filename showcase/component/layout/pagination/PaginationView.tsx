import * as PropTypes from "prop-types";
import * as React from "react";
import Stateless from "component/Stateless";
import {Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious, PaginationProps} from "bambu/lib/components/pagination";
import BrowserUtil from "../../util/BrowserUtil";
import {Size} from "bambu";

export interface PageCallback {
    (page?: number): any;
}

export interface PaginationViewOptions extends PaginationProps {
    sizeOfPerSide?: number;
    next?: string;
    previous?: string;
    pageNumberRenderer?: (page: number) => React.ReactChild;
    rangeSeparatorRenderer?: (props: PaginationViewProps, isLeft: boolean) => React.ReactChild;
}

export interface PaginationViewProps extends PaginationViewOptions {
    total: number;
    current: number;
    onPage: PageCallback;
}

export default class PaginationView extends Stateless<PaginationViewProps> {
    public static propTypes = {
        total: PropTypes.number.isRequired,
        current: PropTypes.number.isRequired,
        onPage: PropTypes.func.isRequired,
        sizeOfPerSide: PropTypes.number,
        next: PropTypes.string,
        previous: PropTypes.string,
        pageNumberRenderer: PropTypes.func,
        rangeSeparatorRenderer: PropTypes.func
    };

    public static defaultProps = {
        isCentered: true,
        next: ">>",
        previous: "<<",
        sizeOfPerSide: 3,
        pageNumberRenderer: PaginationView.pageNumberRenderer,
        rangeSeparatorRenderer: PaginationView.rangeSeparatorRenderer,
        bSize: BrowserUtil.isMobile() ? Size.small : null
    };

    public render() {
        const {total, current, next, previous, sizeOfPerSide, rangeSeparatorRenderer, pageNumberRenderer, onPage, ...props} = this.props;
        const previousPage = current - sizeOfPerSide - 1;
        const previousDisabled = previousPage < 1;
        const nextPage = current + sizeOfPerSide + 1;
        const nextDisabled = nextPage > total;

        return (
            <Pagination {...props}>
                <PaginationPrevious key={"pagination-previous"} onClick={!previousDisabled ? (e?: any) => onPage(previousPage) : null} disabled={previousDisabled}>{previous}</PaginationPrevious>
                {PaginationView.renderPaginationList(this.props)}
                <PaginationNext key={"pagination-next"} onClick={!nextDisabled ? (e?: any) => onPage(nextPage) : null} disabled={nextDisabled}>{next}</PaginationNext>
            </Pagination>
        );
    }

    public static renderPaginationList(props: PaginationViewProps) {
        const elements: React.ReactChild[] = [];

        let leftSize = props.current - props.sizeOfPerSide;
        if (leftSize < 1) {
            leftSize = 1;
        }
        let rightSize = props.current + props.sizeOfPerSide;
        if (rightSize > props.total) {
            rightSize = props.total;
        }

        if (leftSize > 1) {
            elements.push(PaginationView.renderFirst(props));
            if (leftSize > 2) {
                elements.push(props.rangeSeparatorRenderer(props, true));
            }
        }

        for (let i = leftSize; (i <= rightSize); i = i + 1) {
            elements.push(PaginationView.renderPage(props, i));
        }

        if (rightSize < props.total) {
            if (rightSize < props.total - 1) {
                elements.push(props.rangeSeparatorRenderer(props, false));
            }
            elements.push(PaginationView.renderPage(props, props.total));
        }

        return (
            <PaginationList>
                {elements}
            </PaginationList>
        );
    }

    public static rangeSeparatorRenderer(isLeft: boolean, props: PaginationViewProps): React.ReactChild {
        let page: number;
        if (isLeft) {
            page = props.current - props.sizeOfPerSide;
            if (page < 1) page = 1;
        } else {
            page = props.current + props.sizeOfPerSide;
            if (page > props.total) page = props.total;
        }
        return <PaginationEllipsis key={`pagination-ellipsis-${isLeft ? "left" : "right"}`} onClick={() => props.onPage(page)}/>;
    }

    public static renderFirst(props: PaginationViewProps) {
        return PaginationView.renderPage(props, 1);
    }

    public static renderPage(props: PaginationViewProps, page: number) {
        return (
            <PaginationLink key={`pagination-${page}`} isCurrent={props.current === page} onClick={() => props.onPage(page)}>{props.pageNumberRenderer(page)}</PaginationLink>
        );
    }

    public static pageNumberRenderer(page: number) {
        return `${page}`;
    }
}
