import * as React from "react";
import IconSample1 from "./IconSample1";
import IconSample2 from "./IconSample2";
import IconSample3 from "./IconSample3";

export default {
    name: "Icon Sample",
    subs: [
        {
            name: "Icon Sample ( with name)",
            description: "icon='...'",
            element: <IconSample1 />
        },
        {
            name: "Icon Sample ( with options)",
            description: "icon='...'",
            element: <IconSample2 />
        },
        {
            name: "Icon Sample ( with JSX.Element)",
            description: "icon='...'",
            element: <IconSample3 />
        }
    ]
};
