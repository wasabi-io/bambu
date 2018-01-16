import { action, observable } from 'mobx';

export interface LocationProps {
    pathname?: string;
    search?: string;
    hash?: string;
    key?: string;
    state?: any;
}

class LocationStore {
    @observable
    private _location: LocationProps = null;
    public get location() {
        return this._location;
    }

    @action
    public setLocation(location: LocationProps) {
        if (!location.pathname.endsWith("/")) {
            location.pathname += "/";
        }
        this._location = location;
    }

    public getPaths() {
        return this._location.pathname.split("/").filter(function (item: any) {
            if (item && isNaN(item))
                return item;
        });
    }
}

const locationStore = new LocationStore();
export default locationStore;