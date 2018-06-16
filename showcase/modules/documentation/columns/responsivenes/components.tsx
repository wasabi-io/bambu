import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "./columns/responsiveness",
    name: "responsiveness",
    title: "Responsiveness",
    subTitle: <span>Handle <strong>different</strong> column layouts for each <strong>breakpoint</strong></span>,
    icon: {
        name: "arrows-alt-h",
        iconClassName: pageStyle.hasTextPrimary
    }
};

export default components;
