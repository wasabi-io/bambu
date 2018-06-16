import {Props} from "wasabi-common";
import {Color} from "bambu";
import {Field, IEvent} from "../field/Field";

export interface FormFieldProps extends Props<any> {
    label?: string;
    value?: any;
    color?: Color;
    help?: string;
    helpColor?: Color;
    onChange?: (e: IEvent) => any;

    [key: string]: any;
}

export interface FormField extends FormFieldProps, Field {
}

export interface FieldProps {
    [key: string]: FormFieldProps
}
