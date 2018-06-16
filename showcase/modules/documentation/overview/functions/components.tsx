import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "./overview/functions",
    name: "functions",
    title: "Functions",
    subTitle: <span>Utility functions to calculate colors and other values</span>,
    icon: {
        name: "code",
        iconClassName: pageStyle.hasTextOrange,
    }
};

export default components;
