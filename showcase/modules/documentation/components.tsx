import * as React from "react";
import {Props} from "wasabi-common";
import bulmaDocs from "../../css/bulmaDocs";
import {FaIconStyle} from "bambu/lib/elements/icon";

export interface DocumentProps {
    module?: string;
    name: string;
    title: string;
    subTitle: JSX.Element | string;
    icon?: string;
    iconStyle?: FaIconStyle;
    iconClassName?: string;
    children?: Props<DocumentProps>;
}

const components: Props<DocumentProps> = {
    documentation: {
        module: ".",
        name: "documentation",
        title: "Documentation",
        subTitle: <span>Everything you need to <strong>create a website</strong> with Bulma</span>,
        children: {
            overview: {
                module: "./overview",
                name: "overview",
                title: "Overview",
                icon: "eye",
                iconClassName: bulmaDocs.overview,
                subTitle: <span>An overview of what Bulma as a <strong>framework</strong> is all about</span>,
                children: {
                    start: {
                        module: "./overview/start",
                        name: "start",
                        title: "Getting Started",
                        icon: "rocket",
                        iconClassName: bulmaDocs.hasTextDanger,
                        subTitle: <span>You only need <strong>1 CSS file</strong> to use Bulma</span>
                    },
                    customize: {
                        module: "./overview/customize",
                        name: "customize",
                        title: "Customize",
                        icon: "paint-brush",
                        iconClassName: bulmaDocs.hasTextStar,
                        subTitle: <span>Create your <strong>own theme</strong> with a simple set of <strong>variables</strong></span>,
                    },
                    classes: {
                        module: "./overview/classes",
                        name: "classes",
                        title: "Classes",
                        icon: "css3",
                        iconStyle: FaIconStyle.brands,
                        iconClassName: bulmaDocs.hasTextLink,
                        subTitle: <span>Bulma is simply a <strong>collection</strong> of CSS classes. Write the HTML code you want.</span>
                    },
                    modularity: {
                        module: "./overview/modularity",
                        name: "modularity",
                        title: "Modularity",
                        icon: "cubes",
                        iconClassName: bulmaDocs.hasTextSuccess,
                        subTitle: <span>Just import what you <strong>need</strong></span>
                    },
                    responsiveness: {
                        module: "./overview/responsiveness",
                        name: "responsiveness",
                        title: "Responsiveness",
                        icon: "arrows-alt-h",
                        iconClassName: bulmaDocs.hasTextPrimary,
                        subTitle: <span>Bulma is a <strong>mobile-first</strong> framework</span>
                    },
                    variables: {
                        module: "./overview/variables",
                        name: "variables",
                        title: "Variables",
                        icon: "cogs",
                        iconClassName: bulmaDocs.hasTextGrey,
                        subTitle: <span>See how Bulma uses <strong>Sass variables</strong> to allow easy customization</span>,
                    },
                    colors: {
                        module: "./overview/colors",
                        name: "colors",
                        title: "Colors",
                        icon: "tint",
                        iconClassName: bulmaDocs.hasTextInfo,
                        subTitle: <span>The <strong>colors</strong> that <strong>style</strong> most Bulma elements and components</span>
                    },
                    functions: {
                        module: "./overview/functions",
                        name: "functions",
                        title: "Functions",
                        icon: "code",
                        iconClassName: bulmaDocs.hasTextOrange,
                        subTitle: <span>Utility functions to calculate colors and other values</span>
                    },
                    mixins: {
                        module: "./overview/mixins",
                        name: "mixins",
                        title: "Mixins",
                        icon: "plus",
                        iconClassName: bulmaDocs.hasTextPurple,
                        subTitle: <span>Utility mixins for custom elements and responsive helpers</span>
                    }
                }
            },
            modifiers: {
                module: "./modifiers",
                name: "modifiers",
                title: "Modifiers",
                icon: "cogs",
                iconClassName: bulmaDocs.hasTextGrey,
                subTitle: <span>An <strong>easy-to-read</strong> naming system designed for humans</span>,
                children: {
                    syntax: {
                        module: "./modifiers/syntax",
                        name: "syntax",
                        title: "Syntax",
                        subTitle: <span>Most Bulma elements have <strong>alternative</strong> styles. To apply them, you only need to append one of the <strong>modifier classes</strong>. They all start with <code>is-</code> or <code>has-</code>.</span>,
                        icon: "code",
                        iconClassName: bulmaDocs.hasTextOrange
                    },
                    helpers: {
                        module: "./modifiers/helpers",
                        name: "helpers",
                        title: "Helper",
                        subTitle: <span>Apply <strong>helper classes</strong> to almost any element, in order to alter its style</span>,
                        icon: "medkit",
                        iconClassName: bulmaDocs.hasTextDanger
                    },
                    "responsive-helpers": {
                        module: "./modifiers/responsive-helpers",
                        name: "responsive-helpers",
                        title: "Responsive Helpers",
                        subTitle: <span><strong>Show/hide content</strong> depending on the width of the viewport</span>,
                        icon: "arrows-alt-h",
                        iconClassName: bulmaDocs.hasTextPrimary
                    },
                    "color-helpers": {
                        module: "./modifiers/color-helpers",
                        name: "color-helpers",
                        title: "Color Helpers",
                        subTitle: <span>Change the <strong>color</strong> of the text and/or background</span>,
                        icon: "tint",
                        iconClassName: bulmaDocs.hasTextInfo
                    },
                    "typography-helpers": {
                        module: "./modifiers/typography-helpers",
                        name: "typography-helpers",
                        title: "Typography Helpers",
                        subTitle: <span>Change the <strong>size</strong> and <strong>color</strong> of the text for one or multiple viewport width</span>,
                        icon: "font",
                        iconClassName: bulmaDocs.hasTextGreyDark
                    }
                }
            },
            columns: {
                module: "./columns",
                name: "columns",
                title: "Columns",
                icon: "columns",
                iconClassName: bulmaDocs.hasTextStar,
                subTitle: <span>The power of <strong>Flexbox</strong> in a simple interface</span>,
                children: {
                    basics: {
                        module: "./columns/basics",
                        name: "basics",
                        title: "Basics",
                        subTitle: <span>A simple way to build <strong>responsive columns</strong></span>,
                        icon: "columns",
                        iconClassName: bulmaDocs.hasTextStar
                    },
                    sizes: {
                        module: "./columns/sizes",
                        name: "sizes",
                        title: "Sizes",
                        subTitle: <span>Define the <strong>size</strong> of each column <strong>individually</strong></span>,
                        icon: "expand-arrows-alt",
                        iconClassName: bulmaDocs.hasTextSuccess
                    },
                    responsiveness: {
                        module: "./columns/responsiveness",
                        name: "responsiveness",
                        title: "Responsiveness",
                        subTitle: <span>Handle <strong>different</strong> column layouts for each <strong>breakpoint</strong></span>,
                        icon: "arrows-alt-h",
                        iconClassName: bulmaDocs.hasTextPrimary
                    },
                    nesting: {
                        module: "./columns/nesting",
                        name: "nesting",
                        title: "Nesting",
                        subTitle: <span>A simple way to build <strong>responsive columns</strong></span>,
                        icon: "sitemap",
                        iconClassName: bulmaDocs.hasTextDanger
                    },
                    gap: {
                        module: "./columns/gap",
                        name: "gap",
                        title: "Gap",
                        subTitle: <span>Customize the <strong>gap</strong> between the columns</span>,
                        icon: "pause",
                        iconClassName: bulmaDocs.hasTextInfo
                    },
                    options: {
                        module: "./columns/options",
                        name: "options",
                        title: "Options",
                        subTitle: <span>Design different <strong>types</strong> of column layouts</span>,
                        icon: "cogs",
                        iconClassName: bulmaDocs.hasTextInfo
                    }
                }
            },
            layout: {
                module: "./layout",
                name: "layout",
                title: "Layout",
                icon: "warehouse",
                iconClassName: bulmaDocs.hasTextSuccess,
                subTitle: <span> Design the <strong>structure</strong> of your webpage with these CSS classes</span>,
                children: {
                    container: {
                        module: "./layout/container",
                        name: "container",
                        title: "Container",
                        subTitle: <span>A simple <strong>container</strong> to center your content horizontally</span>,
                        icon: "linkCounter",
                        iconClassName: bulmaDocs.hasTextStar
                    },
                    level: {
                        module: "./layout/level",
                        name: "level",
                        title: "Level",
                        subTitle: <span>A multi-purpose <strong>horizontal level</strong>, which can contain almost any other element</span>,
                        icon: "linkCounter",
                        iconClassName: bulmaDocs.hasTextStar
                    },
                    "media-object": {
                        module: "./layout/media-object",
                        name: "media-object",
                        title: "Media Object",
                        subTitle: <span>The famous <strong>media object</strong> prevalent in social media interfaces, but useful in any context</span>,
                        icon: "linkCounter",
                        iconClassName: bulmaDocs.hasTextStar
                    },
                    hero: {
                        module: "./layout/hero",
                        name: "hero",
                        title: "Hero",
                        subTitle: <span>An imposing <strong>hero banner</strong> to showcase something</span>,
                        icon: "linkCounter",
                        iconClassName: bulmaDocs.hasTextStar
                    },
                    section: {
                        module: "./layout/section",
                        name: "section",
                        title: "Section",
                        subTitle: <span>A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading</span>,
                        icon: "linkCounter",
                        iconClassName: bulmaDocs.hasTextStar
                    },
                    footer: {
                        module: "./layout/footer",
                        name: "footer",
                        title: "Footer",
                        subTitle: <span>A simple responsive <strong>footer</strong> which can include anything: lists, headings, columns, icons, buttons, etc.</span>,
                        icon: "linkCounter",
                        iconClassName: bulmaDocs.hasTextStar
                    },
                    tiles: {
                        module: "./layout/tiles",
                        name: "tiles",
                        title: "Tiles",
                        subTitle: <span>A <strong>single tile</strong> element to build 2-dimensional Metro-like, Pinterest-like, or whatever-you-like grids</span>,
                        icon: "linkCounter",
                        iconClassName: bulmaDocs.hasTextStar
                    },
                }
            },
            form: {
                module: "./form",
                name: "form",
                title: "Form",
                icon: "wpforms",
                iconClassName: bulmaDocs.hasTextLink,
                subTitle: <span>The indispensable <strong>form controls</strong>, designed for maximum clarity</span>,
                children: {
                    general: {
                        module: "./form/general",
                        name: "general",
                        title: "General",
                        subTitle: <span>All generic <strong>form controls</strong>, designed for consistency</span>,
                        icon: "keyboard",
                        iconClassName: bulmaDocs.hasTextLink
                    },
                    input: {
                        module: "./form/input",
                        name: "input",
                        title: "Input",
                        subTitle: <span>The <strong>text input</strong> and its variations</span>,
                        icon: "minus",
                        iconClassName: bulmaDocs.hasTextLink
                    },
                    textarea: {
                        module: "./form/textarea",
                        name: "textarea",
                        title: "Textarea",
                        subTitle: <span>The multiline <strong>textarea</strong> and its variations</span>,
                        icon: "square",
                        iconClassName: bulmaDocs.hasTextLink
                    },
                    select: {
                        module: "./form/select",
                        name: "select",
                        title: "Select",
                        subTitle: <span>The browser built-in <strong>select dropdown</strong>, styled accordingly</span>,
                        icon: "mouse-pointer",
                        iconClassName: bulmaDocs.hasTextLink
                    },
                    checkbox: {
                        module: "./form/checkbox",
                        name: "checkbox",
                        title: "CheckBox",
                        subTitle: <span>The 2-state <strong>checkbox</strong> in its native format</span>,
                        icon: "check-square",
                        iconClassName: bulmaDocs.hasTextLink
                    },
                    radio: {
                        module: "./form/radio",
                        name: "radio",
                        title: "Radio",
                        subTitle: <span>The mutually exclusive <strong>radio buttons</strong> in their native format</span>,
                        icon: "dot-circle",
                        iconClassName: bulmaDocs.hasTextLink
                    },
                    file: {
                        module: "./form/file",
                        name: "file",
                        title: "File",
                        subTitle: <span>A custom <strong>file upload</strong> input, without JavaScript</span>,
                        icon: "cloud-upload-alt",
                        iconClassName: bulmaDocs.hasTextLink
                    },
                }
            },
            elements: {
                module: "./elements",
                name: "elements",
                title: "Elements",
                icon: "cube",
                subTitle: <span>Essential interface elements that only require a <strong>single CSS class</strong></span>,
                children: {
                    box: {
                        module: "./elements/box",
                        name: "box",
                        title: "Box",
                        subTitle: <span>A white <strong>box</strong> to contain other elements</span>,
                        icon: "square",
                        iconClassName: bulmaDocs.hasTextGrey
                    },
                    button: {
                        module: "./elements/button",
                        name: "button",
                        title: "Button",
                        subTitle: <span>The classic <strong>button</strong>, in different colors, sizes, and states</span>,
                        icon: "hand-pointer",
                        iconClassName: bulmaDocs.hasTextSuccess
                    },
                    content: {
                        module: "./elements/content",
                        name: "content",
                        title: "Content",
                        subTitle: <span>A single class to handle <strong>WYSIWYG</strong> generated content, where only <strong>HTML tags</strong> are available</span>,
                        icon: "align-left",
                        iconClassName: bulmaDocs.hasTextPrimary
                    },
                    delete: {
                        module: "./elements/delete",
                        name: "delete",
                        title: "Delete",
                        subTitle: <span> A versatile <strong>delete</strong> cross</span>,
                        icon: "times-circle",
                        iconClassName: bulmaDocs.hasTextDanger
                    },
                    icon: {
                        module: "./elements/icon",
                        name: "icon",
                        title: "Icon",
                        subTitle: <span>Compatible with all icon font libraries, including <strong>Font Awesome 5</strong></span>,
                        icon: "font-awesome",
                        iconClassName: bulmaDocs.hasTextLink
                    },
                    image: {
                        module: "./elements/image",
                        name: "image",
                        title: "Image",
                        subTitle: <span>A container for <strong>responsive images</strong></span>,
                        icon: "image",
                        iconClassName: bulmaDocs.hasTextPurple
                    },
                    notification: {
                        module: "./elements/notification",
                        name: "notification",
                        title: "Notification",
                        subTitle: <span>Bold <strong>notification</strong> blocks, to alert your users of something</span>,
                        icon: "exclamation-triangle",
                        iconClassName: bulmaDocs.hasTextOrange
                    },
                    progress: {
                        module: "./elements/progress",
                        name: "progress",
                        title: "Progress Bar",
                        subTitle: <span>Native HTML <strong>progress</strong> bars</span>,
                        icon: "spinner",
                        iconClassName: bulmaDocs.hasTextWarning
                    },
                    table: {
                        module: "./elements/table",
                        name: "table",
                        title: "Table",
                        subTitle: <span>The inevitable HTML <strong>table</strong>, with special case cells</span>,
                        icon: "table",
                        iconClassName: bulmaDocs.hasTextInfo
                    },
                    tag: {
                        module: "./elements/tag",
                        name: "tag",
                        title: "Tag",
                        subTitle: <span>Small <strong>tag labels</strong> to insert anywhere</span>,
                        icon: "tag",
                        iconClassName: bulmaDocs.hasTextSuccess
                    },
                    title: {
                        module: "./elements/title",
                        name: "title",
                        title: "Title",
                        subTitle: <span>Simple <strong>headings</strong> to add depth to your page</span>,
                        icon: "heading",
                        iconClassName: bulmaDocs.hasTextBlack
                    },
                }
            },
            components: {
                module: "./components",
                name: "components",
                title: "Components",
                icon: "cubes",
                iconClassName: bulmaDocs.hasTextDanger,
                subTitle: <span> Advanced multi-part components with lots of possibilities</span>,
                children: {
                    breadcrumb: {
                        module: "./components/breadcrumb",
                        name: "breadcrumb",
                        title: "BreadCrumb",
                        subTitle: <span>A simple <strong>breadcrumb</strong> component to improve your navigation experience</span>,
                        icon: "ellipsis-h",
                        iconClassName: bulmaDocs.hasTextStar
                    },
                    card: {
                        module: "./components/card",
                        name: "card",
                        title: "Card",
                        subTitle: <span>An all-around flexible and composable component</span>,
                        icon: "id-card",
                        iconClassName: bulmaDocs.hasTextSuccess
                    },
                    dropdown: {
                        module: "./components/dropdown",
                        name: "dropdown",
                        title: "Dropdown",
                        subTitle: <span>An interactive <strong>dropdown menu</strong> for discoverable content</span>,
                        icon: "angle-down",
                        iconClassName: bulmaDocs.hasTextSuccess
                    },
                    menu: {
                        module: "./components/menu",
                        name: "menu",
                        title: "Menu",
                        subTitle: <span>A simple <strong>menu</strong>, for any type of vertical navigation</span>,
                        icon: "bars",
                        iconClassName: bulmaDocs.hasTextLink
                    },
                    message: {
                        module: "./components/message",
                        name: "message",
                        title: "Message",
                        subTitle: <span>Colored <strong>message</strong> blocks, to emphasize part of your page</span>,
                        icon: "window-maximize",
                        iconClassName: bulmaDocs.hasTextInfo
                    },
                    modal: {
                        module: "./components/modal",
                        name: "modal",
                        title: "Modal",
                        subTitle: <span>A classic <strong>modal</strong> overlay, in which you can include <em>any</em> content you want</span>,
                        icon: "clone",
                        iconClassName: bulmaDocs.hasTextDanger
                    },
                    navbar: {
                        module: "./components/navbar",
                        name: "navbar",
                        title: "Navbar",
                        subTitle: <span>A responsive horizontal <strong>navbar</strong> that can support images, links, buttons, and dropdowns</span>,
                        icon: "minus",
                        iconClassName: bulmaDocs.hasTextPrimary
                    },
                    pagination: {
                        module: "./components/pagination",
                        name: "pagination",
                        title: "Pagination",
                        subTitle: <span> A responsive, usable, and flexible <strong>pagination</strong></span>,
                        icon: "caret-square-right",
                        iconClassName: bulmaDocs.hasTextOrange
                    },
                    panel: {
                        module: "./components/panel",
                        name: "panel",
                        title: "Panel",
                        subTitle: <span>A composable <strong>panel</strong>, for compact controls</span>,
                        icon: "list-alt",
                        iconClassName: bulmaDocs.hasTextGreyDark
                    },
                    tabs: {
                        module: "./components/tabs",
                        name: "tabs",
                        title: "Tabs",
                        subTitle: <span>Simple responsive horizontal navigation <strong>tabs</strong>, with different styles</span>,
                        icon: "folder",
                        iconClassName: bulmaDocs.hasTextPurple
                    },
                }
            },
        }
    }
};

export default components;
