import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "./overview/colors",
    name: "colors",
    title: "Colors",
    subTitle: <span>The <strong>colors</strong> that <strong>style</strong> most Bulma elements and components</span>,
    icon: {
        name: "tint",
        iconClassName: pageStyle.hasTextInfo,
    }
};

export default components;
