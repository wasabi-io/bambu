import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/modifiers/color-helpers",
    name: "color-helpers",
    title: "Color Helpers",
    subTitle: <span>Change the <strong>color</strong> of the text and/or background</span>,
    icon: {
        name: "tint",
        iconClassName: pageStyle.hasTextInfo
    }
};

export default components;
