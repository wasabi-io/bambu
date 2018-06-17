import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/elements/delete",
    name: "delete",
    title: "Delete",
    subTitle: <span> A versatile <strong>delete</strong> cross</span>,
    icon: {
        name: "times-circle",
        iconClassName: pageStyle.hasTextDanger
    },
    componentPath: "elements/delete"
};

export default components;
