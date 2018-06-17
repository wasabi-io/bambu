import * as React from "react";
import pageStyle from "css/pageStyle";
import PagesProps from "../PagesProps";

const components: PagesProps = {
    module: "/layout",
    name: "layout",
    title: "Layout",
    subTitle: <span> Design the <strong>structure</strong> of your webpage with these CSS classes</span>,
    icon: {
        name: "warehouse",
        iconClassName: pageStyle.hasTextSuccess,
    },
    children: {
        container: {
            module: "/layout/container",
            name: "container",
            title: "Container",
            subTitle: <span>A simple <strong>container</strong> to center your content horizontally</span>,
            icon: {
                name: "linkCounter",
                iconClassName: pageStyle.hasTextStar
            }
        },
        level: {
            module: "/layout/level",
            name: "level",
            title: "Level",
            subTitle: <span>A multi-purpose <strong>horizontal level</strong>, which can contain almost any other element</span>,
            icon: {
                name: "linkCounter",
                iconClassName: pageStyle.hasTextStar
            }
        },
        "media-object": {
            module: "/layout/media-object",
            name: "media-object",
            title: "Media Object",
            subTitle: <span>The famous <strong>media object</strong> prevalent in social media interfaces, but useful in any context</span>,
            icon: {
                name: "linkCounter",
                iconClassName: pageStyle.hasTextStar
            }
        },
        hero: {
            module: "/layout/hero",
            name: "hero",
            title: "Hero",
            subTitle: <span>An imposing <strong>hero banner</strong> to showcase something</span>,
            icon: {
                name: "linkCounter",
                iconClassName: pageStyle.hasTextStar
            }
        },
        section: {
            module: "/layout/section",
            name: "section",
            title: "Section",
            subTitle: <span>A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading</span>,
            icon: {
                name: "linkCounter",
                iconClassName: pageStyle.hasTextStar
            }
        },
        footer: {
            module: "/layout/footer",
            name: "footer",
            title: "Footer",
            subTitle: <span>A simple responsive <strong>footer</strong> which can include anything: lists, headings, columns, icons, buttons, etc.</span>,
            icon: {
                name: "linkCounter",
                iconClassName: pageStyle.hasTextStar
            }
        },
        tiles: {
            module: "/layout/tiles",
            name: "tiles",
            title: "Tiles",
            subTitle: <span>A <strong>single tile</strong> element to build 2-dimensional Metro-like, Pinterest-like, or whatever-you-like grids</span>,
            icon: {
                name: "linkCounter",
                iconClassName: pageStyle.hasTextStar
            }
        },
    }
};

export default components;
