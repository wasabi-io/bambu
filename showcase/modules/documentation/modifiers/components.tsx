import * as React from "react";
import pageStyle from "css/pageStyle";
import PagesProps from "../PagesProps";

const components: PagesProps = {
    module: "/modifiers",
    name: "modifiers",
    title: () => "Modifiers",
    icon: {
        name: "cogs",
        iconClassName: pageStyle.hasTextGrey
    },
    subTitle: (key: string) => <span key={key}>An <strong>easy-to-read</strong> naming system designed for humans</span>,
    children: {
        syntax: {
            module: "/modifiers/syntax",
            name: "syntax",
            title: () => "Syntax",
            subTitle: (key: string) => <span key={key}>Most Bulma elements have <strong>alternative</strong> styles. To apply them, you only need to append one of the <strong>modifier classes</strong>. They all start with <code>is-</code> or <code>has-</code>.</span>,
            icon: {
                name: "code",
                iconClassName: pageStyle.hasTextOrange
            }
        },
        helpers: {
            module: "/modifiers/helpers",
            name: "helpers",
            title: () => "Helper",
            subTitle: (key: string) => <span key={key}>Apply <strong>helper classes</strong> to almost any element, in order to alter its style</span>,
            icon: {
                name: "medkit",
                iconClassName: pageStyle.hasTextDanger
            }
        },
        "responsive-helpers": {
            module: "/modifiers/responsive-helpers",
            name: "responsive-helpers",
            title: () => "Responsive Helpers",
            subTitle: (key: string) => <span key={key}><strong>Show/hide content</strong> depending on the width of the viewport</span>,
            icon: {
                name: "arrows-alt-h",
                iconClassName: pageStyle.hasTextPrimary
            }
        },
        "color-helpers": {
            module: "/modifiers/color-helpers",
            name: "color-helpers",
            title: () => "Color Helpers",
            subTitle: (key: string) => <span key={key}>Change the <strong>color</strong> of the text and/or background</span>,
            icon: {
                name: "tint",
                iconClassName: pageStyle.hasTextInfo
            }
        },
        "typography-helpers": {
            module: "/modifiers/typography-helpers",
            name: "typography-helpers",
            title: () => "Typography Helpers",
            subTitle: (key: string) => <span key={key}>Change the <strong>size</strong> and <strong>color</strong> of the text for one or multiple viewport width</span>,
            icon: {
                name: "font",
                iconClassName: pageStyle.hasTextGreyDark
            }
        }
    }
};

export default components;
