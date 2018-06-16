export interface PathProps {
    [key: string]: PathProps | string[];
}

const documentPaths: PathProps = {
    documentation: {
        overview: {
            classes: [],
            colors: {},
            customize: {},
            functions: {},
            mixins: {},
            modularity: {},
            responsiveness: {},
            start: {},
            variables: {},
        },
        modifiers: {
            "color-helpers": {},
            helpers: {},
            "responsive-helpers": {},
            syntax: {},
            "typography-helper": {},
        },
        columns: {
            basics: {},
            gap: {},
            nesting: {},
            options: {},
            responsivenes: {},
            sizes: {},
        },
        layout: {
            container: {},
            footer: {},
            hero: {},
            level: {},
            "media-object": {},
            section: {},
            tiles: {},
        },
        form: {
            checkbox: {},
            file: {},
            general: {},
            input: {},
            radio: {},
            select: {},
            textarea: {},
        },
        elements: {
            box: {},
            button: {},
            content: {},
            delete: {},
            icon: {},
            image: {},
            notification: {},
            progress: {},
            table: {},
            tag: {},
            title: {},
        },
        components: {
            breadcrumb: {},
            card: {},
            dropdown: {},
            menu: {},
            message: {},
            modal: {},
            navbar: {},
            pagination: {},
            panel: {},
            tabs: {},
        }
    }
};

export default documentPaths;
