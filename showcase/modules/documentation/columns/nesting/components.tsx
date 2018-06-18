import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/columns/nesting",
    name: "nesting",
    title: () => "Nesting",
    subTitle: (key: string) => <span key={key}>A simple way to build <strong>responsive columns</strong></span>,
    icon: {
        name: "sitemap",
        iconClassName: pageStyle.hasTextDanger
    }
};

export default components;
