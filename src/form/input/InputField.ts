import { Props } from "wasabi-common";

export interface IEventTarget extends Props<any> {
    name?: string;
    parsedValue?: any;
    value?: any;
}

export interface IEvent extends Props<any> {
    readonly target: IEventTarget;
}

export interface InputFieldChange {
    (e?: IEvent): any;
}
