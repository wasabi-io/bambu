import {Props} from "wasabi-common";

export interface IEvent extends Props<any> {
    readonly target: any;
}

export interface Field {
    name: string;
    type: string;
}
