import * as React from "react";
import pageStyle from "css/pageStyle";
import PagesProps from "../PagesProps";

const components: PagesProps = {
    module: "/form",
    name: "form",
    title: () => "Form",
    subTitle: (key: string) => <span key={key}>The indispensable <strong>form controls</strong>, designed for maximum clarity</span>,
    icon: {
        name: "wpforms",
        iconClassName: pageStyle.hasTextLink,
    },
    children: {
        general: {
            module: "/form/general",
            name: "general",
            title: () => "General",
            subTitle: (key: string) => <span key={key}>All generic <strong>form controls</strong>, designed for consistency</span>,
            icon: {
                name: "keyboard",
                iconClassName: pageStyle.hasTextLink
            }
        },
        input: {
            module: "/form/input",
            name: "input",
            title: () => "Input",
            subTitle: (key: string) => <span key={key}>The <strong>text input</strong> and its variations</span>,
            icon: {
                name: "minus",
                iconClassName: pageStyle.hasTextLink
            }
        },
        textarea: {
            module: "/form/textarea",
            name: "textarea",
            title: () => "Textarea",
            subTitle: (key: string) => <span key={key}>The multiline <strong>textarea</strong> and its variations</span>,
            icon: {
                name: "square",
                iconClassName: pageStyle.hasTextLink
            }
        },
        select: {
            module: "/form/select",
            name: "select",
            title: () => "Select",
            subTitle: (key: string) => <span key={key}>The browser built-in <strong>select dropdown</strong>, styled accordingly</span>,
            icon: {
                name: "mouse-pointer",
                iconClassName: pageStyle.hasTextLink
            }
        },
        checkbox: {
            module: "/form/checkbox",
            name: "checkbox",
            title: () => "CheckBox",
            subTitle: (key: string) => <span key={key}>The 2-state <strong>checkbox</strong> in its native format</span>,
            icon: {
                name: "check-square",
                iconClassName: pageStyle.hasTextLink
            }
        },
        radio: {
            module: "/form/radio",
            name: "radio",
            title: () => "Radio",
            subTitle: (key: string) => <span key={key}>The mutually exclusive <strong>radio buttons</strong> in their native format</span>,
            icon: {
                name: "dot-circle",
                iconClassName: pageStyle.hasTextLink
            }
        },
        file: {
            module: "/form/file",
            name: "file",
            title: () => "File",
            subTitle: (key: string) => <span key={key}>A custom <strong>file upload</strong> input, without JavaScript</span>,
            icon: {
                name: "cloud-upload-alt",
                iconClassName: pageStyle.hasTextLink
            }
        }
    }
};

export default components;
