import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";
import {FaIconStyle} from "bambu/lib/elements/icon";

const components: PagesProps = {
    module: "/overview/classes",
    name: "classes",
    title: "Classes",
    subTitle: <span>Bulma is simply a <strong>collection</strong> of CSS classes. Write the HTML code you want.</span>,
    icon: {
        name: "css3",
        iconStyle: FaIconStyle.brands,
        iconClassName: pageStyle.hasTextLink,
    }
}

export default components;
