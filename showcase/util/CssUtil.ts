import * as classNames from "classnames";
import bulmaDocs from "../css/bulmaDocs";

export default class CssUtil {
    public static addClassName(element: any, className: string) {
        const currentClassName = element.className;
        const currentClassNames = currentClassName ? currentClassName.split(" ") : [];
        currentClassNames.push(bulmaDocs.bdIsHovering);
        element.className = currentClassNames.join(" ");
    }

    public static removeClass(element: any, className: string) {
        const currentClassName = element.className;
        if (!currentClassName) return;
        const currentClassNames = currentClassName.split(" ");
        let ind;
        while ((ind = currentClassNames.indexOf(className)) !== -1) {
            currentClassNames.splice(ind, 1);
            element.className = classNames(currentClassNames);
        }
    }
}