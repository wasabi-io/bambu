import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "./overview/start",
    name: "start",
    title: "Getting Started",
    subTitle: <span>You only need <strong>1 CSS file</strong> to use Bulma</span>,
    icon: {
        name: "rocket",
        iconClassName: pageStyle.hasTextDanger,
    }
};

export default components;
