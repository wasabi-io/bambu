import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "./components/navbar",
    name: "navbar",
    title: "Navbar",
    subTitle: <span key="components-navbar-parent">A responsive horizontal <strong>navbar</strong> that can support images, links, buttons, and dropdowns</span>,
    icon: {
        name: "minus",
        iconClassName: pageStyle.hasTextPrimary
    },
    componentPath: "components/navbar"
};

export default components;
