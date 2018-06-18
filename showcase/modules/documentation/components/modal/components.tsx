import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/components/modal",
    name: "modal",
    title: () => "Modal",
    subTitle: (key: string) => <span key={key}>A classic <strong>modal</strong> overlay, in which you can include <em>any</em> content you want</span>,
    icon: {
        name: "clone",
        iconClassName: pageStyle.hasTextDanger
    },
    componentPath: "components/modal"
};

export default components;
