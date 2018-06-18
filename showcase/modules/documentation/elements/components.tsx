import * as React from "react";
import pageStyle from "css/pageStyle";
import PagesProps from "../PagesProps";
import {bulma} from "bambu";

const components: PagesProps = {
    module: "/elements",
    name: "elements",
    title: () => "Elements",
    icon: {
        name: "cube",
        iconClassName: bulma.hasTextInfo,
    },
    subTitle: (key: string) => <span key={key}>Essential interface elements that only require a <strong>single CSS class</strong></span>,
    children: {
        box: {
            module: "/elements/box",
            name: "box",
            title: () => "Box",
            subTitle: (key: string) => <span key={key}>A white <strong>box</strong> to contain other elements</span>,
            icon: {
                name: "square",
                iconClassName: pageStyle.hasTextGrey
            },
        },
        button: {
            module: "/elements/button",
            name: "button",
            title: () => "Button",
            subTitle: (key: string) => <span key={key}>The classic <strong>button</strong>, in different colors, sizes, and states</span>,
            icon: {
                name: "hand-pointer",
                iconClassName: pageStyle.hasTextSuccess
            }
        },
        content: {
            module: "/elements/content",
            name: "content",
            title: () => "Content",
            subTitle: (key: string) => <span key={key}>A single class to handle <strong>WYSIWYG</strong> generated content, where only <strong>HTML tags</strong> are available</span>,
            icon: {
                name: "align-left",
                iconClassName: pageStyle.hasTextPrimary
            }
        },
        delete: {
            module: "/elements/delete",
            name: "delete",
            title: () => "Delete",
            subTitle: (key: string) => <span key={key}> A versatile <strong>delete</strong> cross</span>,
            icon: {
                name: "times-circle",
                iconClassName: pageStyle.hasTextDanger
            }
        },
        icon: {
            module: "/elements/icon",
            name: "icon",
            title: () => "Icon",
            subTitle: (key: string) => <span key={key}>Compatible with all icon font libraries, including <strong>Font Awesome 5</strong></span>,
            icon: {
                name: "font-awesome",
                iconClassName: pageStyle.hasTextLink
            }
        },
        image: {
            module: "/elements/image",
            name: "image",
            title: () => "Image",
            subTitle: (key: string) => <span key={key}>A container for <strong>responsive images</strong></span>,
            icon: {
                name: "image",
                iconClassName: pageStyle.hasTextPurple
            }
        },
        notification: {
            module: "/elements/notification",
            name: "notification",
            title: () => "Notification",
            subTitle: (key: string) => <span key={key}>Bold <strong>notification</strong> blocks, to alert your users of something</span>,
            icon: {
                name: "exclamation-triangle",
                iconClassName: pageStyle.hasTextOrange
            }
        },
        progress: {
            module: "/elements/progress",
            name: "progress",
            title: () => "Progress Bar",
            subTitle: (key: string) => <span key={key}>Native HTML <strong>progress</strong> bars</span>,
            icon: {
                name: "spinner",
                iconClassName: pageStyle.hasTextWarning
            }
        },
        table: {
            module: "/elements/table",
            name: "table",
            title: () => "Table",
            subTitle: (key: string) => <span key={key}>The inevitable HTML <strong>table</strong>, with special case cells</span>,
            icon: {
                name: "table",
                iconClassName: pageStyle.hasTextInfo
            }
        },
        tag: {
            module: "/elements/tag",
            name: "tag",
            title: () => "Tag",
            subTitle: (key: string) => <span key={key}>Small <strong>tag labels</strong> to insert anywhere</span>,
            icon: {
                name: "tag",
                iconClassName: pageStyle.hasTextSuccess
            }
        },
        title: {
            module: "/elements/title",
            name: "title",
            title: () => "Title",
            subTitle: (key: string) => <span key={key}>Simple <strong>headings</strong> to add depth to your page</span>,
            icon: {
                name: "heading",
                iconClassName: pageStyle.hasTextBlack
            }
        }
    }
};

export default components;
