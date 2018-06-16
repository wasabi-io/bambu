import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "./elements/icon",
    name: "icon",
    title: "Icon",
    subTitle: <span>Compatible with all icon font libraries, including <strong>Font Awesome 5</strong></span>,
    icon: {
        name: "font-awesome",
        iconClassName: pageStyle.hasTextLink
    },
    componentPath: "elements/icon"
};

export default components;
