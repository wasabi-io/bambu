import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "./form/select",
    name: "select",
    title: "Select",
    subTitle: <span>The browser built-in <strong>select dropdown</strong>, styled accordingly</span>,
    icon: {
        name: "mouse-pointer",
        iconClassName: pageStyle.hasTextLink
    }
};

export default components;
