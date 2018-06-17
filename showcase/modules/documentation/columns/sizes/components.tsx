import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/columns/sizes",
    name: "sizes",
    title: "Sizes",
    subTitle: <span>Define the <strong>size</strong> of each column <strong>individually</strong></span>,
    icon: {
        name: "expand-arrows-alt",
        iconClassName: pageStyle.hasTextSuccess
    }
};

export default components;
