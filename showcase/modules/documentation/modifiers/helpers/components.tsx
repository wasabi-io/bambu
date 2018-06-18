import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/modifiers/helpers",
    name: "helpers",
    title: () => "Helper",
    subTitle: (key: string) => <span key={key}>Apply <strong>helper classes</strong> to almost any element, in order to alter its style</span>,
    icon: {
        name: "medkit",
        iconClassName: pageStyle.hasTextDanger
    }
};

export default components;
