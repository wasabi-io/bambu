import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "./elements/content",
    name: "content",
    title: "Content",
    subTitle: <span>A single class to handle <strong>WYSIWYG</strong> generated content, where only <strong>HTML tags</strong> are available</span>,
    icon: {
        name: "align-left",
        iconClassName: pageStyle.hasTextPrimary
    },
    componentPath: "elements/content"
};

export default components;
