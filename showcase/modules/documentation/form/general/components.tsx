import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/form/general",
    name: "general",
    title: "General",
    subTitle: <span>All generic <strong>form controls</strong>, designed for consistency</span>,
    icon: {
        name: "keyboard",
        iconClassName: pageStyle.hasTextLink
    }
};

export default components;
