import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/layout/hero",
    name: "basics",
    title: () => "Basics",
    subTitle: (key: string) => <span key={key}>A simple way to build <strong>responsive columns</strong></span>,
    icon: {
        name: "columns",
        iconClassName: pageStyle.hasTextStar
    }
};

export default components;
