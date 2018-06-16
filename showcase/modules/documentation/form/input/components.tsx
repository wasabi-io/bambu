import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "./form/input",
    name: "input",
    title: "Input",
    subTitle: <span>The <strong>text input</strong> and its variations</span>,
    icon: {
        name: "minus",
        iconClassName: pageStyle.hasTextLink
    }
};

export default components;
