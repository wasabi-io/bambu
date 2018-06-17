import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/overview/modularity",
    name: "modularity",
    title: "Modularity",
    subTitle: <span>Just import what you <strong>need</strong></span>,
    icon: {
        name: "cubes",
        iconClassName: pageStyle.hasTextSuccess,
    }
};

export default components;
