import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "./columns/options",
    name: "options",
    title: "Options",
    subTitle: <span>Design different <strong>types</strong> of column layouts</span>,
    icon: {
        name: "cogs",
        iconClassName: pageStyle.hasTextInfo
    }
};

export default components;
