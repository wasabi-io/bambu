import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "./modifiers/responsive-helpers",
    name: "responsive-helpers",
    title: "Responsive Helpers",
    subTitle: <span><strong>Show/hide content</strong> depending on the width of the viewport</span>,
    icon: {
        name: "arrows-alt-h",
        iconClassName: pageStyle.hasTextPrimary
    }
};

export default components;
