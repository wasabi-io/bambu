import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "./elements/tag",
    name: "tag",
    title: "Tag",
    subTitle: <span>Small <strong>tag labels</strong> to insert anywhere</span>,
    icon: {
        name: "tag",
        iconClassName: pageStyle.hasTextSuccess
    },
    componentPath: "elements/tag"
};

export default components;
