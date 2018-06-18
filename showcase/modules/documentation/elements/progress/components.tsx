import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/elements/progress",
    name: "progress",
    title: () => "Progress Bar",
    subTitle: (key: string) => <span key={key}>Native HTML <strong>progress</strong> bars</span>,
    icon: {
        name: "spinner",
        iconClassName: pageStyle.hasTextWarning
    },
    componentPath: "elements/progress"
};

export default components;
