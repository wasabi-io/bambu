import {Arrays, has, Props} from "wasabi-common";

export interface ParsedHash {
    paths: string[];
    queries: Props<string>;
}

export default class UrlUtil {
    private static BASE_PATH: string = null;

    public static parseHash(locationHash: string): ParsedHash {
        const hash = (locationHash || "#/").substring(1);

        const paramIndex = hash.indexOf("?");
        const pathPart = paramIndex !== -1 ? hash.substring(1, paramIndex) : hash;
        const queryPart = paramIndex !== -1 ? hash.substring(1, paramIndex) : "";

        let paths = pathPart.split("/").filter((path: string) => has(path));
        paths = Arrays.removeValue(paths, "");

        const queries = UrlUtil.parseQueries(queryPart);
        return {
            paths,
            queries
        };
    }

    public static parseQueries(query: string) {
        const result: Props<string> = {};
        if (!query) return result;
        query.split('&').forEach((item) => {
            if (item) {
                const startIndex = item.indexOf('=');
                const key = startIndex !== -1 ? item.substring(1, startIndex) : item;
                const value = startIndex !== -1 ? item.substring(startIndex) : "";
                result[key] = value;
            }
            return result;
        });
        return result;
    }

    public static get basePath(): string {
        if (UrlUtil.BASE_PATH) {
            return UrlUtil.BASE_PATH;
        }

        let index = window.location.pathname.indexOf("#");
        if (index === -1) {
            index = window.location.pathname.length;
        }

        let basePath = window.location.pathname.substring(0, index - 1);
        index = basePath.indexOf("index.html");
        if (index !== -1) {
            basePath = window.location.pathname.substring(0, index - 1);
        }

        if (basePath.length > 1) {
            if (basePath.lastIndexOf("/") !== basePath.length - 1) {
                basePath = basePath + "/";
            }
            document.write('<base href="' + basePath + '"/>');
        }
        this.BASE_PATH = basePath || "/";
        return this.BASE_PATH;
    }
}
