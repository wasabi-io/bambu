import * as React from "react";
import pageStyle from "css/pageStyle";
import PagesProps from "../PagesProps";

const components: PagesProps = {
    module: "/components",
    name: "components",
    title: () => "Components",
    icon: {
        name: "cubes",
        iconClassName: pageStyle.hasTextDanger
    },
    subTitle: (key: string) => <span key={key}> Advanced multi-part components with lots of possibilities</span>,
    children: {
        breadcrumb: {
            module: "/components/breadcrumb",
            name: "breadcrumb",
            title: () => "BreadCrumb",
            subTitle: (key: string) => <span key={key}>A simple <strong>breadcrumb</strong> component to improve your navigation experience</span>,
            icon: {
                name: "ellipsis-h",
                iconClassName: pageStyle.hasTextStar
            }
        },
        card: {
            module: "/components/card",
            name: "card",
            title: () => "Card",
            subTitle: (key: string) => <span key={key}>An all-around flexible and composable component</span>,
            icon: {
                name: "id-card",
                iconClassName: pageStyle.hasTextSuccess,
            }
        },
        dropdown: {
            module: "/components/dropdown",
            name: "dropdown",
            title: () => "Dropdown",
            subTitle: (key: string) => <span key={key}>An interactive <strong>dropdown menu</strong> for discoverable content</span>,
            icon: {
                name: "angle-down",
                iconClassName: pageStyle.hasTextSuccess,
            },
        },
        menu: {
            module: "/components/menu",
            name: "menu",
            title: () => "Menu",
            subTitle: (key: string) => <span key={key}>A simple <strong>menu</strong>, for any type of vertical navigation</span>,
            icon: {
                name: "bars",
                iconClassName: pageStyle.hasTextLink,
            },
        },
        message: {
            module: "/components/message",
            name: "message",
            title: () => "Message",
            subTitle: (key: string) => <span key={key}>Colored <strong>message</strong> blocks, to emphasize part of your page</span>,
            icon: {
                name: "window-maximize",
                iconClassName: pageStyle.hasTextInfo,
            },
        },
        modal: {
            module: "/components/modal",
            name: "modal",
            title: () => "Modal",
            subTitle: (key: string) => <span key={key}>A classic <strong>modal</strong> overlay, in which you can include <em>any</em> content you want</span>,
            icon: {
                name: "clone",
                iconClassName: pageStyle.hasTextDanger
            },
        },
        navbar: {
            module: "/components/navbar",
            name: "navbar",
            title: () => "Navbar",
            subTitle: (key: string) => <span key={key}>A responsive horizontal <strong>navbar</strong> that can support images, links, buttons, and dropdowns</span>,
            icon: {
                name: "minus",
                iconClassName: pageStyle.hasTextPrimary
            }
        },
        pagination: {
            module: "/components/pagination",
            name: "pagination",
            title: () => "Pagination",
            subTitle: (key: string) => <span key={key}> A responsive, usable, and flexible <strong>pagination</strong></span>,
            icon: {
                name: "caret-square-right",
                iconClassName: pageStyle.hasTextOrange,
            }
        },
        panel: {
            module: "/components/panel",
            name: "panel",
            title: () => "Panel",
            subTitle: (key: string) => <span key={key}>A composable <strong>panel</strong>, for compact controls</span>,
            icon: {
                name: "list-alt",
                iconClassName: pageStyle.hasTextGreyDark
            }
        },
        tabs: {
            module: "/components/tabs",
            name: "tabs",
            title: () => "Tabs",
            subTitle: (key: string) => <span key={key}>Simple responsive horizontal navigation <strong>tabs</strong>, with different styles</span>,
            icon: {
                name: "folder",
                iconClassName: pageStyle.hasTextPurple
            }
        }
    }
};

export default components;
