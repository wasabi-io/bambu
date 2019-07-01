import {Props} from "wasabi-common/lib/types/Objects";
import Strings from "wasabi-common/lib/types/Strings";

export class Exception extends Error {
    public status: number;
    public code: string;

    public constructor(status: number, code: string, message: string) {
        super(`${message}`);
        this.status = status;
        this.code = code;
    }
}

export default class Errors {
    public static new(status: number, code: string, message: string, props?: Props): Error {
        return new Exception(status, code, Errors.message(message, props));
    }

    public static message(message: string, props?: Props): string {
        return props ? Strings.template(message, props) : message;
    }
}
