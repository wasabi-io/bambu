import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/elements/title",
    name: "title",
    title: () => "Title",
    subTitle: (key: string) => <span key={key}>Simple <strong>headings</strong> to add depth to your page</span>,
    icon: {
        name: "heading",
        iconClassName: pageStyle.hasTextBlack
    },
    componentPath: "elements/title"
};

export default components;
