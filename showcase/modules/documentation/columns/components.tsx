import * as React from "react";
import pageStyle from "css/pageStyle";
import PagesProps from "../PagesProps";

const components: PagesProps = {
    module: "/columns",
    name: "columns",
    title: () => "Columns",
    icon: {
        name: "columns",
        iconClassName: pageStyle.hasTextStar,
    },
    subTitle: (key: string) => <span key={key}>The power of <strong>Flexbox</strong> in a simple interface</span>,
    children: {
        basics: {
            module: "/columns/basics",
            name: "basics",
            title: () => "Basics",
            subTitle: (key: string) => <span key={key}>A simple way to build <strong>responsive columns</strong></span>,
            icon: {
                name: "columns",
                iconClassName: pageStyle.hasTextStar,
            }
        },
        sizes: {
            module: "/columns/sizes",
            name: "sizes",
            title: () => "Sizes",
            subTitle: (key: string) => <span key={key}>Define the <strong>size</strong> of each column <strong>individually</strong></span>,
            icon: {
                name: "expand-arrows-alt",
                iconClassName: pageStyle.hasTextSuccess
            }
        },
        responsiveness: {
            module: "/columns/responsiveness",
            name: "responsiveness",
            title: () => "Responsiveness",
            subTitle: (key: string) => <span key={key}>Handle <strong>different</strong> column layouts for each <strong>breakpoint</strong></span>,
            icon: {
                name: "arrows-alt-h",
                iconClassName: pageStyle.hasTextPrimary
            }
        },
        nesting: {
            module: "/columns/nesting",
            name: "nesting",
            title: () => "Nesting",
            subTitle: (key: string) => <span key={key}>A simple way to build <strong>responsive columns</strong></span>,
            icon: {
                name: "sitemap",
                iconClassName: pageStyle.hasTextDanger
            }
        },
        gap: {
            module: "/columns/gap",
            name: "gap",
            title: () => "Gap",
            subTitle: (key: string) => <span key={key}>Customize the <strong>gap</strong> between the columns</span>,
            icon: {
                name: "pause",
                iconClassName: pageStyle.hasTextInfo
            }
        },
        options: {
            module: "/columns/options",
            name: "options",
            title: () => "Options",
            subTitle: (key: string) => <span key={key}>Design different <strong>types</strong> of column layouts</span>,
            icon: {
                name: "cogs",
                iconClassName: pageStyle.hasTextInfo
            }
        }
    }
};

export default components;
