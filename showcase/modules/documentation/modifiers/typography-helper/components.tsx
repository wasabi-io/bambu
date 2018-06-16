import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "./modifiers/typography-helpers",
    name: "typography-helpers",
    title: "Typography Helpers",
    subTitle: <span>Change the <strong>size</strong> and <strong>color</strong> of the text for one or multiple viewport width</span>,
    icon: {
        name: "font",
        iconClassName: pageStyle.hasTextGreyDark
    }
};

export default components;
