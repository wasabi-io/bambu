import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "./elements/image",
    name: "image",
    title: "Image",
    subTitle: <span>A container for <strong>responsive images</strong></span>,
    icon: {
        name: "image",
        iconClassName: pageStyle.hasTextPurple
    },
    componentPath: "elements/image"
};

export default components;
