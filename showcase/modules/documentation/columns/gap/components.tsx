import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/columns/gap",
    name: "gap",
    title: () => "Gap",
    subTitle: (key: string) => <span key={key}>Customize the <strong>gap</strong> between the columns</span>,
    icon: {
        name: "pause",
        iconClassName: pageStyle.hasTextInfo
    }
};

export default components;
