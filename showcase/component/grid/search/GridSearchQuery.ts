import {Props} from "wasabi-common";

export enum OrderType {
    asc = "asc",
    desc = "desc"
}

interface GridSearchQuery<E = Props<any>> {
    sort(name: string, orderType: OrderType): OrderType;

    offset(offset: number): any;

    like(name: string, value: any): any;

    offset(offset: number): any;

    between(name: string, leftValue: any, rightValue: any): any;

    desc(name: string): any;

    endsWith(name: string, value: any): any;

    eq(name: string, value: any): any;

    gte(name: string, value: any): any;

    gt(name: string, value: any): any;

    in(name: string, values: any[]): any;

    isFalse(name: string): any;

    isNotNull(name: string): any;

    isNull(name: string): any;

    isTrue(name: string): any;

    lte(name: string, value: any): any;

    lt(name: string, value: any): any;

    like(name: string, value: any): any;

    likeIn(name: string, values: any[]): any;

    limit(limit: number): any;

    neq(name: string, value: any): any;
}

export default GridSearchQuery;
