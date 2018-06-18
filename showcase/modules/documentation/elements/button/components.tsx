import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/elements/button",
    name: "button",
    title: () => "Button",
    subTitle: (key: string) => <span key={key}>The classic <strong>button</strong>, in different colors, sizes, and states</span>,
    icon: {
        name: "hand-pointer",
        iconClassName: pageStyle.hasTextSuccess
    },
    componentPath: "elements/button"
};

export default components;
