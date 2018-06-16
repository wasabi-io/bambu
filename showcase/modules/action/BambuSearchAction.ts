import GridSearchQuery, {OrderType} from "component/grid/search/GridSearchQuery";
import {Criteria} from "js-criteria";
import GridStore from "component/grid/GridStore";
import {action} from "mobx";

export interface BambuSearchActionProps<E> {
    store: GridStore<E>;
    offset?: number;
    limit: number;
}

export default class BambuSearchAction<E> implements GridSearchQuery {
    private readonly _criteria: Criteria<E>;
    private readonly _store: GridStore<E>;
    private _offset: number;
    private _limit: number;

    public constructor(props: BambuSearchActionProps<E>) {
        this._store = props.store;
        this._criteria = new Criteria(props.store.items);
        this._criteria.setOffset(props.offset);
        this._criteria.setLimit(props.limit);
    }

    @action
    public sort(name: string, orderType: OrderType) {
        this._criteria.removeOrder(name).sort(name, orderType);
        this.list();
        return orderType;
    }

    @action
    public offset = (offset: number) => {
        this._criteria.setOffset(offset);
        this.list();
    }

    public between = (name: string, leftValue: any, rightValue: any) => {
        this._criteria.between(name, leftValue, rightValue);
        this.list();
    }
    public desc = (name: string) => {
        this._criteria.desc(name);
        this.list();
    }
    public endsWith = (name: string, value: any) => {
        this._criteria.endsWith(name, value);
        this.list();
    }

    public eq = (name: string, value: any) => {
        this._criteria.eq(name, value);
        this.list();
    }

    public gte = (name: string, value: any) => {
        this._criteria.gte(name, value);
        this.list();
    }

    public gt = (name: string, value: any) => {
        this._criteria.gt(name, value);
        this.list();
    }

    public in = (name: string, values: any[]) => {
        this._criteria.in(name, values);
        this.list();
    }

    public isFalse = (name: string) => {
        this._criteria.isFalse(name);
        this.list();
    }
    public isNotNull = (name: string) => {
        this._criteria.isNotNull(name);
        this.list();
    }
    public isNull = (name: string) => {
        this._criteria.isNull(name);
        this.list();
    }
    public isTrue = (name: string) => {
        this._criteria.isTrue(name);
        this.list();
    }
    public lte = (name: string, value: any) => {
        this._criteria.lte(name, value);
        this.list();
    }
    public lt = (name: string, value: any) => {
        this._criteria.lt(name, value);
        this.list();
    }
    public like = (name: string, value: any) => {
        this._criteria.like(name, value);
        this.list();
    }
    public likeIn = (name: string, values: any[]) => {
        this._criteria.likeIn(name, values);
        this.list();
    }

    @action
    public limit = (limit: number) => {
        this._criteria.setLimit(limit);
        this.list();
    }

    public neq = (name: string, value: any) => {
        this._criteria.neq(name, value);
    }

    public startsWith = (name: string, value: any) => {
        this._criteria.startsWith(name, value);
        this.list();
    }

    @action
    public list(): BambuSearchAction<E> {
        const result = this._criteria.list();
        this.store.setItems(result.data);
        this.store.setTotal(result.total);
        this.store.setOffset(this._criteria.offset);
        this.store.setLimit(this._criteria.limit);
        return this;
    }

    public get store() {
        return this._store;
    }
}
