import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/form/radio",
    name: "radio",
    title: "Radio",
    subTitle: <span>The mutually exclusive <strong>radio buttons</strong> in their native format</span>,
    icon: {
        name: "dot-circle",
        iconClassName: pageStyle.hasTextLink
    }
};

export default components;
