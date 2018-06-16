import * as React from "react";
import pageStyle from "css/pageStyle";
import PagesProps from "../PagesProps";

const components: PagesProps = {
    module: "./components",
    name: "components",
    title: "Components",
    icon: {
        name: "cubes",
        iconClassName: pageStyle.hasTextDanger
    },
    subTitle: <span key="components-parent"> Advanced multi-part components with lots of possibilities</span>,
    children: {
        breadcrumb: {
            module: "./components/breadcrumb",
            name: "breadcrumb",
            title: "BreadCrumb",
            subTitle: <span key="components-breadcrumb">A simple <strong>breadcrumb</strong> component to improve your navigation experience</span>,
            icon: {
                name: "ellipsis-h",
                iconClassName: pageStyle.hasTextStar
            }
        },
        card: {
            module: "./components/card",
            name: "card",
            title: "Card",
            subTitle: <span key="components-card">An all-around flexible and composable component</span>,
            icon: {
                name: "id-card",
                iconClassName: pageStyle.hasTextSuccess,
            }
        },
        dropdown: {
            module: "./components/dropdown",
            name: "dropdown",
            title: "Dropdown",
            subTitle: <span key="components-dropdown">An interactive <strong>dropdown menu</strong> for discoverable content</span>,
            icon: {
                name: "angle-down",
                iconClassName: pageStyle.hasTextSuccess,
            },
        },
        menu: {
            module: "./components/menu",
            name: "menu",
            title: "Menu",
            subTitle: <span key="components-menu">A simple <strong>menu</strong>, for any type of vertical navigation</span>,
            icon: {
                name: "bars",
                iconClassName: pageStyle.hasTextLink,
            },
        },
        message: {
            module: "./components/message",
            name: "message",
            title: "Message",
            subTitle: <span key="components-message">Colored <strong>message</strong> blocks, to emphasize part of your page</span>,
            icon: {
                name: "window-maximize",
                iconClassName: pageStyle.hasTextInfo,
            },
        },
        modal: {
            module: "./components/modal",
            name: "modal",
            title: "Modal",
            subTitle: <span key="components-modal">A classic <strong>modal</strong> overlay, in which you can include <em>any</em> content you want</span>,
            icon: {
                name: "clone",
                iconClassName: pageStyle.hasTextDanger
            },
        },
        navbar: {
            module: "./components/navbar",
            name: "navbar",
            title: "Navbar",
            subTitle: <span key="components-navbar">A responsive horizontal <strong>navbar</strong> that can support images, links, buttons, and dropdowns</span>,
            icon: {
                name: "minus",
                iconClassName: pageStyle.hasTextPrimary
            }
        },
        pagination: {
            module: "./components/pagination",
            name: "pagination",
            title: "Pagination",
            subTitle: <span key="components-pagination"> A responsive, usable, and flexible <strong>pagination</strong></span>,
            icon: {
                name: "caret-square-right",
                iconClassName: pageStyle.hasTextOrange,
            }
        },
        panel: {
            module: "./components/panel",
            name: "panel",
            title: "Panel",
            subTitle: <span key="components-panel">A composable <strong>panel</strong>, for compact controls</span>,
            icon: {
                name: "list-alt",
                iconClassName: pageStyle.hasTextGreyDark
            }
        },
        tabs: {
            module: "./components/tabs",
            name: "tabs",
            title: "Tabs",
            subTitle: <span key="components-tabs">Simple responsive horizontal navigation <strong>tabs</strong>, with different styles</span>,
            icon: {
                name: "folder",
                iconClassName: pageStyle.hasTextPurple
            }
        }
    },
    componentPath: "components"
};

export default components;
