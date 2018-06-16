import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "./form/checkbox",
    name: "checkbox",
    title: "CheckBox",
    subTitle: <span>The 2-state <strong>checkbox</strong> in its native format</span>,
    icon: {
        name: "check-square",
        iconClassName: pageStyle.hasTextLink
    },
    componentPath: "elements/form/input"
};

export default components;
