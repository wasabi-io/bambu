import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "./overview/customize",
    name: "customize",
    title: "Customize",
    subTitle: <span>Create your <strong>own theme</strong> with a simple set of <strong>variables</strong></span>,
    icon: {
        name: "paint-brush",
        iconClassName: pageStyle.hasTextStar
    }
};

export default components;
