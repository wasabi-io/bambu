import * as React from "react";
import {Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious} from "bambu/lib/components/pagination";

export default class Index extends React.Component <{}, {}> {
    public render() {
        return (
            <Pagination>
                <PaginationPrevious disabled>Previous</PaginationPrevious>
                <PaginationNext>Next page</PaginationNext>
                <PaginationList>
                    <PaginationLink isCurrent>1</PaginationLink>
                    <PaginationLink>2</PaginationLink>
                    <PaginationLink>3</PaginationLink>
                    <PaginationEllipsis/>
                    <PaginationLink>86</PaginationLink>
                </PaginationList>
            </Pagination>
        );
    }
}
