import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/overview/responsiveness",
    name: "responsiveness",
    title: () => "Responsiveness",
    subTitle: (key: string) => <span key={key}>Bulma is a <strong>mobile-first</strong> framework</span>,
    icon: {
        name: "arrows-alt-h",
        iconClassName: pageStyle.hasTextPrimary,
    }
};

export default components;
