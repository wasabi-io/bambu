import * as React from "react";
import {Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious} from "bambu/lib/components/pagination";

export default class Index extends React.Component <{}, {}> {
    public render() {
        return (
            <Pagination isRounded>
                <PaginationPrevious>Previous</PaginationPrevious>
                <PaginationNext>Next page</PaginationNext>
                <PaginationList>
                    <PaginationLink>1</PaginationLink>
                    <PaginationEllipsis/>
                    <PaginationLink>45</PaginationLink>
                    <PaginationLink isCurrent>46</PaginationLink>
                    <PaginationLink>47</PaginationLink>
                    <PaginationEllipsis/>
                    <PaginationLink>86</PaginationLink>
                </PaginationList>
            </Pagination>
        );
    }
}
