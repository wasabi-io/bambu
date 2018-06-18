import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/components/pagination",
    name: "pagination",
    title: () => "Pagination",
    subTitle: (key: string) => <span key={key}> A responsive, usable, and flexible <strong>pagination</strong></span>,
    icon: {
        name: "caret-square-right",
        iconClassName: pageStyle.hasTextOrange,
    },
    componentPath: "components/pagination"
};

export default components;
