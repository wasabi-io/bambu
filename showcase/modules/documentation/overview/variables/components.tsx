import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/overview/variables",
    name: "variables",
    title: () => "Variables",
    subTitle: (key: string) => <span key={key}>See how Bulma uses <strong>Sass variables</strong> to allow easy customization</span>,
    icon: {
        name: "cogs",
        iconClassName: pageStyle.hasTextGrey,
    }
};

export default components;
