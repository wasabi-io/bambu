import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/components/menu",
    name: "menu",
    title: () => "Menu",
    subTitle: (key: string) => <span key={key}>A simple <strong>menu</strong>, for any type of vertical navigation</span>,
    icon: {
        name: "bars",
        iconClassName: pageStyle.hasTextLink,
    },
    componentPath: "components/menu"
};

export default components;
