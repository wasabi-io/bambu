import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/components/panel",
    name: "panel",
    title: () => "Panel",
    subTitle: (key: string) => <span key={key}>A composable <strong>panel</strong>, for compact controls</span>,
    icon: {
        name: "list-alt",
        iconClassName: pageStyle.hasTextGreyDark
    },
    componentPath: "components/panel"
};

export default components;
