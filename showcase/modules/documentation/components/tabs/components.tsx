import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "./components/tabs",
    name: "tabs",
    title: "Tabs",
    subTitle: <span key="components-tabs-parent">Simple responsive horizontal navigation <strong>tabs</strong>, with different styles</span>,
    icon: {
        name: "folder",
        iconClassName: pageStyle.hasTextPurple
    },
    componentPath: "components/tabs"
};

export default components;
