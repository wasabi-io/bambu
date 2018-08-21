import * as ClassNames from "classnames";
import {Generator} from "wasabi-common";

export default class CodeUtility {
    public static addClassName(element: any, className: string) {
        const currentClassName = element.className;
        const currentClassNames = currentClassName ? currentClassName.split(" ") : [];
        currentClassNames.push(className);
        element.className = currentClassNames.join(" ");
    }

    public static removeClass(element: any, className: string) {
        const currentClassName = element.className;
        if (!currentClassName) return;
        const currentClassNames = currentClassName.split(" ");
        let ind;
        while ((ind = currentClassNames.indexOf(className)) !== -1) {
            currentClassNames.splice(ind, 1);
            element.className = ClassNames(currentClassNames);
        }
    }

    public static copy(value: string) {
        const id = Generator.guid();
        let element: any = document.createElement("textarea");
        element.id = id;
        element.value = value;
        element.style = {
            visibility: "hidden"
        };

        document.body.appendChild(element);
        element = document.getElementById(id);
        element.select();
        document.execCommand("copy");
        document.body.removeChild(element);
    }
}
