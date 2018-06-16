import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "./overview/mixins",
    name: "mixins",
    title: "Mixins",
    subTitle: <span>Utility mixins for custom elements and responsive helpers</span>,
    icon: {
        name: "plus",
        iconClassName: pageStyle.hasTextPurple,
    }
};

export default components;
