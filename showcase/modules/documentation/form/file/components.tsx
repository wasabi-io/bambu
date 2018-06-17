import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/form/file",
    name: "file",
    title: "File",
    subTitle: <span>A custom <strong>file upload</strong> input, without JavaScript</span>,
    icon: {
        name: "cloud-upload-alt",
        iconClassName: pageStyle.hasTextLink
    }
};

export default components;
