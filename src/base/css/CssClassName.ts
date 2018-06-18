import {Props} from "wasabi-common";
import CssModule from "./CssModule";

export interface Reference<P> {
    module: P;
}

export default class CssClassName {
    [key: string]: any;

    private reference: Reference<Props<string>>;

    public constructor(module: Props<string>) {
        CssClassName.init(this, module);
        this.$putAll = this.$putAll.bind(this);
        this.$put = this.$put.bind(this);
    }

    public $putAll(module: Props<string>) {
        for (const key in module) {
            if (!module.hasOwnProperty(key) && typeof module[key] !== "string") {
                continue;
            }
            this.$put(key, module[key]);
        }
    }

    public $put(key: string, value: string) {
        this[key] = value;
        CssClassName.defineGetterSetter(this, key, value);
    }

    private static init($self: CssClassName, module: Props<string>) {
        $self.reference = {module: (module || {})};
        for (const key in module) {
            if (!module.hasOwnProperty(key)) {
                continue;
            }
            CssClassName.defineGetterSetter($self, key, module[key]);
        }
    }

    private static defineGetterSetter($self: CssClassName, key: string, value: string) {
        const camelCase = CssClassName.addCamelCase($self, key, value);
        CssClassName.defineProperty($self, $self.reference, key, camelCase);
    }

    private static defineProperty(obj: any, reference: Reference<Props<string>>, key: string, camelCase?: string) {
        const getterSetter = {
            get: () => reference.module[key],
            set: (value: string) => {
                reference.module[key] = value;
            },
            enumerable: true,
            configurable: true,
        };
        Object.defineProperty(obj, key, getterSetter);
        if (camelCase && camelCase !== key) {
            Object.defineProperty(obj, camelCase, getterSetter);
        }
    }

    public static addCamelCase($self: CssClassName, key: string, value: string): string {
        if (key.search(/[-_]+/g) !== -1) {
            const camelCaseKey = CssModule.toCamelCase(key);
            $self[camelCaseKey] = value;
            return camelCaseKey;
        }
    }
}
