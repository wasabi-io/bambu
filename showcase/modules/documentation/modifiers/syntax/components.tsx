import * as React from "react";
import pageStyle from "../../../../css/pageStyle";
import PagesProps from "../../PagesProps";

const components: PagesProps = {
    module: "/modifiers/syntax",
    name: "syntax",
    title: () => "Syntax",
    subTitle: (key: string) => <span key={key}>Most Bulma elements have <strong>alternative</strong> styles. To apply them, you only need to append one of the <strong>modifier classes</strong>. They all start with <code>is-</code> or <code>has-</code>.</span>,
    icon: {
        name: "code",
        iconClassName: pageStyle.hasTextOrange
    }
};

export default components;
