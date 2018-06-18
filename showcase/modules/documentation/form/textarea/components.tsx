import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/form/textarea",
    name: "textarea",
    title: () => "Textarea",
    subTitle: (key: string) => <span key={key}>The multiline <strong>textarea</strong> and its variations</span>,
    icon: {
        name: "square",
        iconClassName: pageStyle.hasTextLink
    }
};

export default components;
