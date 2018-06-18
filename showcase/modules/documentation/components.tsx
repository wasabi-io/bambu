import * as React from "react";
import PagesProps from "./PagesProps";
import pageStyle from "css/pageStyle";
import Generator from "wasabi-common/lib/util/Generator";

const id = Generator.guid();
const components: PagesProps = {
    module: "",
    name: "documentation",
    title: () => "Documentation",
    subTitle: (key: string) => <span key={key}>Everything you need to <strong>create a website</strong> with Bulma</span>,
    icon: {
        name: "book",
        iconClassName: pageStyle.hasTextGrey,
    },
    children: {
        overview: {
            module: "/overview",
            name: "overview",
            title: () => "Overview",
            icon: {
                name: "eye",
                iconClassName: pageStyle.hasTextPurple,
            },
            subTitle: (key: string) => <span key={key}>An overview of what Bulma as a <strong>framework</strong> is all about</span>
        },
        modifiers: {
            module: "/modifiers",
            name: "modifiers",
            title: () => "Modifiers",
            icon: {
                name: "cogs",
                iconClassName: pageStyle.hasTextGrey,
            },
            subTitle: (key: string) => <span key={key}>An <strong>easy-to-read</strong> naming system designed for humans</span>,
        },
        columns: {
            module: "/columns",
            name: "columns",
            title: () => "Columns",
            icon: {
                name: "columns",
                iconClassName: pageStyle.hasTextStar,
            },
            subTitle: (key: string) => <span key={key}>The power of <strong>Flexbox</strong> in a simple interface</span>,
        },
        layout: {
            module: "/layout",
            name: "layout",
            title: () => "Layout",
            icon: {
                name: "warehouse",
                iconClassName: pageStyle.hasTextSuccess,
            },
            subTitle: (key: string) => <span key={key}> Design the <strong>structure</strong> of your webpage with these CSS classes</span>,
        },
        form: {
            module: "/form",
            name: "form",
            title: () => "Form",
            icon: {
                name: "wpforms",
                iconClassName: pageStyle.hasTextLink,
            },
            subTitle: (key: string) => <span key={key}>The indispensable <strong>form controls</strong>, designed for maximum clarity</span>
        },
        elements: {
            module: "/elements",
            name: "elements",
            title: () => "Elements",
            icon: {
                name: "cube",
                iconClassName: pageStyle.hasTextInfo,
            },
            subTitle: (key: string) => <span key={key}>Essential interface elements that only require a <strong>single CSS class</strong></span>,
        },
        components: {
            module: "/components",
            name: "components",
            title: () => "Components",
            icon: {
                name: "cubes",
                iconClassName: pageStyle.hasTextDanger,
            },
            subTitle: (key: string) => <span key={key}> Advanced multi-part components with lots of possibilities</span>,
        }
    }
};

export default components;
