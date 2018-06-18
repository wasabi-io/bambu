import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/components/dropdown",
    name: "dropdown",
    title: () => "Dropdown",
    subTitle: (key: string) => <span key={key}>An interactive <strong>dropdown menu</strong> for discoverable content</span>,
    icon: {
        name: "angle-down",
        iconClassName: pageStyle.hasTextSuccess,
    },
    componentPath: "components/dropdown"
};

export default components;
