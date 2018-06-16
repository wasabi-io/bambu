import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "./elements/notification",
    name: "notification",
    title: "Notification",
    subTitle: <span>Bold <strong>notification</strong> blocks, to alert your users of something</span>,
    icon: {
        name: "exclamation-triangle",
        iconClassName: pageStyle.hasTextOrange
    },
    componentPath: "elements/notification"
};

export default components;
