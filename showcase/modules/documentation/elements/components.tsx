import * as React from "react";
import pageStyle from "css/pageStyle";
import PagesProps from "../PagesProps";
import {bulma} from "bambu";

const components: PagesProps = {
    module: "/elements",
    name: "elements",
    title: "Elements",
    icon: {
        name: "cube",
        iconClassName: bulma.hasTextInfo,
    },
    subTitle: <span>Essential interface elements that only require a <strong>single CSS class</strong></span>,
    children: {
        box: {
            module: "/elements/box",
            name: "box",
            title: "Box",
            subTitle: <span>A white <strong>box</strong> to contain other elements</span>,
            icon: {
                name: "square",
                iconClassName: pageStyle.hasTextGrey
            },
        },
        button: {
            module: "/elements/button",
            name: "button",
            title: "Button",
            subTitle: <span>The classic <strong>button</strong>, in different colors, sizes, and states</span>,
            icon: {
                name: "hand-pointer",
                iconClassName: pageStyle.hasTextSuccess
            }
        },
        content: {
            module: "/elements/content",
            name: "content",
            title: "Content",
            subTitle: <span>A single class to handle <strong>WYSIWYG</strong> generated content, where only <strong>HTML tags</strong> are available</span>,
            icon: {
                name: "align-left",
                iconClassName: pageStyle.hasTextPrimary
            }
        },
        delete: {
            module: "/elements/delete",
            name: "delete",
            title: "Delete",
            subTitle: <span> A versatile <strong>delete</strong> cross</span>,
            icon: {
                name: "times-circle",
                iconClassName: pageStyle.hasTextDanger
            }
        },
        icon: {
            module: "/elements/icon",
            name: "icon",
            title: "Icon",
            subTitle: <span>Compatible with all icon font libraries, including <strong>Font Awesome 5</strong></span>,
            icon: {
                name: "font-awesome",
                iconClassName: pageStyle.hasTextLink
            }
        },
        image: {
            module: "/elements/image",
            name: "image",
            title: "Image",
            subTitle: <span>A container for <strong>responsive images</strong></span>,
            icon: {
                name: "image",
                iconClassName: pageStyle.hasTextPurple
            }
        },
        notification: {
            module: "/elements/notification",
            name: "notification",
            title: "Notification",
            subTitle: <span>Bold <strong>notification</strong> blocks, to alert your users of something</span>,
            icon: {
                name: "exclamation-triangle",
                iconClassName: pageStyle.hasTextOrange
            }
        },
        progress: {
            module: "/elements/progress",
            name: "progress",
            title: "Progress Bar",
            subTitle: <span>Native HTML <strong>progress</strong> bars</span>,
            icon: {
                name: "spinner",
                iconClassName: pageStyle.hasTextWarning
            }
        },
        table: {
            module: "/elements/table",
            name: "table",
            title: "Table",
            subTitle: <span>The inevitable HTML <strong>table</strong>, with special case cells</span>,
            icon: {
                name: "table",
                iconClassName: pageStyle.hasTextInfo
            }
        },
        tag: {
            module: "/elements/tag",
            name: "tag",
            title: "Tag",
            subTitle: <span>Small <strong>tag labels</strong> to insert anywhere</span>,
            icon: {
                name: "tag",
                iconClassName: pageStyle.hasTextSuccess
            }
        },
        title: {
            module: "/elements/title",
            name: "title",
            title: "Title",
            subTitle: <span>Simple <strong>headings</strong> to add depth to your page</span>,
            icon: {
                name: "heading",
                iconClassName: pageStyle.hasTextBlack
            }
        }
    }
};

export default components;
