import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "./elements/table",
    name: "table",
    title: "Table",
    subTitle: <span>The inevitable HTML <strong>table</strong>, with special case cells</span>,
    icon: {
        name: "table",
        iconClassName: pageStyle.hasTextInfo
    },
    componentPath: "elements/table"
};

export default components;
