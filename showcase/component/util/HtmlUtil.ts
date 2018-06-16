import {Generator} from "wasabi-common";

export default class HtmlUtil {
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
