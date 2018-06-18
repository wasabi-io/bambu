import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/elements/box",
    name: "box",
    title: () => "Box",
    subTitle: (key: string) => <span key={key}>A white <strong>box</strong> to contain other elements</span>,
    icon: {
        name: "square",
        iconClassName: pageStyle.hasTextGrey
    },
    componentPath: "elements/box"
};

export default components;
