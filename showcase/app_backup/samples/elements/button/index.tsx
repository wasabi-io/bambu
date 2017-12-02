import * as React from "react";
import ButtonSample1 from "./ButtonSample1";
import ButtonSample2 from "./ButtonSample2";
import ButtonSample3 from "./ButtonSample3";
import ButtonSample4 from "./ButtonSample4";
import ButtonSample5 from "./ButtonSample5";
import ButtonSample6 from "./ButtonSample6";
import ButtonSample7 from "./ButtonSample7";
import ButtonSample8 from "./ButtonSample8";
import ButtonSample9 from "./ButtonSample9";

export default {
    name: "Button Sample",
    subs: [
        {
            name: "Button Color",
            description: "Button.color = ...",
            element: <ButtonSample1 />
        },
        {
            name: "Button Size",
            description: "Button.size usage",
            element: <ButtonSample2 />
        },
        {
            name: "Button Style (Outlined)",
            description: "Button.BtnStyle = 'outlined'",
            element: <ButtonSample3 />
        },
        {
            name: "Button Style (Inverted)",
            description: "Button.BtnStyle = 'inverted'",
            element: <ButtonSample4 />
        },
        {
            name: "Button State (Hovered)",
            description: "Button.state = 'isHovered'",
            element: <ButtonSample5 />
        },
        {
            name: "Button State (Focused)",
            description: "Button.state = 'isFocused'",
            element: <ButtonSample6 />
        },
        {
            name: "Button State (Active)",
            description: "Button.state = 'isActive'",
            element: <ButtonSample7 />
        },
        {
            name: "Button State (Loading)",
            description: "Button.state = 'isLoading'",
            element: <ButtonSample8 />
        },
        {
            name: "Button State (Static)",
            description: "Button.state = 'isStatic'",
            element: <ButtonSample9 />
        }
    ]
};
