import * as React from "react";
import pageStyle from "css/pageStyle";
import PagesProps from "../PagesProps";

const components: PagesProps = {
    module: "/layout",
    name: "layout",
    title: () => "Layout",
    subTitle: (key: string) => <span key={key}> Design the <strong>structure</strong> of your webpage with these CSS classes</span>,
    icon: {
        name: "warehouse",
        iconClassName: pageStyle.hasTextSuccess,
    },
    children: {
        container: {
            module: "/layout/container",
            name: "container",
            title: () => "Container",
            subTitle: (key: string) => <span key={key}>A simple <strong>container</strong> to center your content horizontally</span>,
            icon: {
                name: "linkCounter",
                iconClassName: pageStyle.hasTextStar
            }
        },
        level: {
            module: "/layout/level",
            name: "level",
            title: () => "Level",
            subTitle: (key: string) => <span key={key}>A multi-purpose <strong>horizontal level</strong>, which can contain almost any other element</span>,
            icon: {
                name: "linkCounter",
                iconClassName: pageStyle.hasTextStar
            }
        },
        "media-object": {
            module: "/layout/media-object",
            name: "media-object",
            title: () => "Media Object",
            subTitle: (key: string) => <span key={key}>The famous <strong>media object</strong> prevalent in social media interfaces, but useful in any context</span>,
            icon: {
                name: "linkCounter",
                iconClassName: pageStyle.hasTextStar
            }
        },
        hero: {
            module: "/layout/hero",
            name: "hero",
            title: () => "Hero",
            subTitle: (key: string) => <span key={key}>An imposing <strong>hero banner</strong> to showcase something</span>,
            icon: {
                name: "linkCounter",
                iconClassName: pageStyle.hasTextStar
            }
        },
        section: {
            module: "/layout/section",
            name: "section",
            title: () => "Section",
            subTitle: (key: string) => <span key={key}>A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading</span>,
            icon: {
                name: "linkCounter",
                iconClassName: pageStyle.hasTextStar
            }
        },
        footer: {
            module: "/layout/footer",
            name: "footer",
            title: () => "Footer",
            subTitle: (key: string) => <span key={key}>A simple responsive <strong>footer</strong> which can include anything: lists, headings, columns, icons, buttons, etc.</span>,
            icon: {
                name: "linkCounter",
                iconClassName: pageStyle.hasTextStar
            }
        },
        tiles: {
            module: "/layout/tiles",
            name: "tiles",
            title: () => "Tiles",
            subTitle: (key: string) => <span key={key}>A <strong>single tile</strong> element to build 2-dimensional Metro-like, Pinterest-like, or whatever-you-like grids</span>,
            icon: {
                name: "linkCounter",
                iconClassName: pageStyle.hasTextStar
            }
        },
    }
};

export default components;
