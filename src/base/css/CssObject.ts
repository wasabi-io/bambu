import {Props} from "wasabi-common";

export class CssObject {

    public static toCamelCase(str: string) {
        // Lower cases the string
        return str.toLowerCase()
        // Replaces any - or _ characters with a space
            .replace(/[-_]+/g, ' ')
            // Removes any non alphanumeric characters
            .replace(/[^\w\s]/g, '')
            // Uppercases the first character in each group immediately following a space
            // (delimited by spaces)
            .replace(/ (.)/g, ($1) => {
                return $1.toUpperCase();
            })
            // Removes spaces
            .replace(/ /g, '');
    }

    public static exportModuleAsCamelCase<T extends Props<any>>(module: T) {
        for (const key in module) {
            if (!module.hasOwnProperty(key)) {
                continue;
            }
            if (key.search(/[-_]+/g) === -1) {
                continue;
            }
            const camelCaseKey = CssObject.toCamelCase(key);
            if (!module[camelCaseKey]) {
                module[camelCaseKey] = module[key];
            }
        }
        return module;
    }
}

export default CssObject;
