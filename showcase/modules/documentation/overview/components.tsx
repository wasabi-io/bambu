import * as React from "react";
import {FaIconStyle} from "bambu/lib/elements/icon";
import pageStyle from "css/pageStyle";
import PagesProps from "../PagesProps";

const components: PagesProps = {
    module: "/overview",
    name: "overview",
    title: "Overview",
    subTitle: <span>An overview of what Bulma as a <strong>framework</strong> is all about</span>,
    icon: {
        name: "eye",
        iconClassName: pageStyle.hasTextPurple,
    },
    children: {
        start: {
            module: "/overview/start",
            name: "start",
            title: "Getting Started",
            subTitle: <span>You only need <strong>1 CSS file</strong> to use Bulma</span>,
            icon: {
                name: "rocket",
                iconClassName: pageStyle.hasTextDanger,
            }
        },
        customize: {
            module: "/overview/customize",
            name: "customize",
            title: "Customize",
            subTitle: <span>Create your <strong>own theme</strong> with a simple set of <strong>variables</strong></span>,
            icon: {
                name: "paint-brush",
                iconClassName: pageStyle.hasTextStar
            }
        },
        classes: {
            module: "/overview/classes",
            name: "classes",
            title: "Classes",
            subTitle: <span>Bulma is simply a <strong>collection</strong> of CSS classes. Write the HTML code you want.</span>,
            icon: {
                name: "css3",
                iconStyle: FaIconStyle.brands,
                iconClassName: pageStyle.hasTextLink,
            }
        },
        modularity: {
            module: "/overview/modularity",
            name: "modularity",
            title: "Modularity",
            subTitle: <span>Just import what you <strong>need</strong></span>,
            icon: {
                name: "cubes",
                iconClassName: pageStyle.hasTextSuccess,
            }
        },
        responsiveness: {
            module: "/overview/responsiveness",
            name: "responsiveness",
            title: "Responsiveness",
            subTitle: <span>Bulma is a <strong>mobile-first</strong> framework</span>,
            icon: {
                name: "arrows-alt-h",
                iconClassName: pageStyle.hasTextPrimary,
            }
        },
        variables: {
            module: "/overview/variables",
            name: "variables",
            title: "Variables",
            subTitle: <span>See how Bulma uses <strong>Sass variables</strong> to allow easy customization</span>,
            icon: {
                name: "cogs",
                iconClassName: pageStyle.hasTextGrey,
            }
        },
        colors: {
            module: "/overview/colors",
            name: "colors",
            title: "Colors",
            subTitle: <span>The <strong>colors</strong> that <strong>style</strong> most Bulma elements and components</span>,
            icon: {
                name: "tint",
                iconClassName: pageStyle.hasTextInfo,
            }
        },
        functions: {
            module: "/overview/functions",
            name: "functions",
            title: "Functions",
            subTitle: <span>Utility functions to calculate colors and other values</span>,
            icon: {
                name: "code",
                iconClassName: pageStyle.hasTextOrange,
            }
        },
        mixins: {
            module: "/overview/mixins",
            name: "mixins",
            title: "Mixins",
            subTitle: <span>Utility mixins for custom elements and responsive helpers</span>,
            icon: {
                name: "plus",
                iconClassName: pageStyle.hasTextPurple,
            }
        }
    }
};

export default components;
