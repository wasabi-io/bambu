import {observable} from "mobx";

export default class DocStore {
    @observable
    private _paths: string[] = [];

    @observable
    private _Component: React.ComponentClass<any>;

    public get paths(): string[] {
        return this._paths;
    }

    public setPaths(paths: string[]) {
        this._paths = paths;
    }

    public get Component() {
        return this._Component;
    }

    public setComponent(component: any) {
        this._Component = component;
    }
}
