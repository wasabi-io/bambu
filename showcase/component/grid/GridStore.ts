import {has, Props} from "wasabi-common";
import {observable} from "mobx";
import GridField from "./GridField";

export interface GridStoreProps<E> {
    id?: string;
    offset?: number;
    limit?: number;
    items?: E[];
    fields?: Props<GridField>;
}

export default class GridStore<E extends Props<any>> {
    private static readonly DEFAULT_PROPS = {
        id: "id",
        offset: 0
    };
    @observable
    private _items: E[];
    @observable
    private _fields: Props<GridField>;
    private _id: string = "id";
    @observable
    private _offset: number;
    @observable
    private _limit: number;
    @observable
    private _total: number;

    public constructor(props?: GridStoreProps<E>) {
        const inputProps = props || {};
        this.setId(inputProps.id);
        this.setItems(inputProps.items);
        this.setFields(inputProps.fields);
        this.setOffset(inputProps.offset);
        this.setLimit(inputProps.limit);
    }

    public get id() {
        return this._id;
    }

    public setId(id: string): GridStore<E> {
        this._id = id || GridStore.DEFAULT_PROPS.id;
        return this;
    }

    public get offset(): number {
        return this._offset;
    }

    public setOffset(value: number): GridStore<E> {
        this._offset = value || GridStore.DEFAULT_PROPS.offset;
        return this;
    }

    public get limit(): number {
        return this._limit;
    }

    public setLimit(value: number): GridStore<E> {
        this._limit = value || (this._items ? this._items.length : null);
        return this;
    }

    public get total(): number {
        return this._total;
    }

    public setTotal(value: number): GridStore<E> {
        this._total = value || (this._total ? this._items.length : 0);
        return this;
    }

    public get items(): E[] {
        return this._items;
    }

    public setItems(value: E[]): GridStore<E> {
        this._items = value || [];
        this._limit = this._limit || this._items.length;
        this._total = has(this._total) ?
            ((this._total < this._items.length) ?
                this._items.length : this._total) :
            this._items.length;
        return this;
    }

    public get fields(): Props<GridField> {
        return this._fields;
    }

    public setFields(fields: Props<GridField>): GridStore<E> {
        this._fields = fields;
        return this;
    }

    public findById(id: string): E {
        const index = this.indexOfById(id);
        return index !== -1 ? this._items[index] : null;
    }

    public insert(item: E) {
        const index = this.indexOfById(item[this._id]);
        if (index !== -1) {
            throw new Error(`The record with "${this._id}" username already exists in the system !`);
        }
        this._items.push(item);
        this._limit === this._limit || this._items.length;
        return false;
    }

    public update(item: E): boolean {
        const index = this.indexOfById(item[this._id]);
        return (index !== -1) && (this._items[index] = item) && true;
    }

    public delete(item: E) {
        return this.deleteById(item[this._id]);
    }

    public deleteById(id: string) {
        const index = this.indexOfById(id);
        if (index !== -1) {
            this.setItems(this._items.splice(index, 1));
            return true;
        }
        return false;
    }

    public indexOfById(id: string): number {
        for (let i = 0; i < this._items.length; i = i + 1) {
            const foundItem = this._items[i];
            if (foundItem[this._id] === id) {
                return i;
            }
        }
        return -1;
    }
}
