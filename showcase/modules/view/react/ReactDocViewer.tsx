import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';
import Page from '../../../component/layout/Page';
import * as reactDocs from "../../react-docs/files.json";
import Accordion from "../../../component/layout/accordion/Accordion";
import {Props} from "wasabi-common";
import {AccordionTabProps} from "../../../component/layout/accordion";
import ReactDoc from "./ReactDoc";
import {observable} from "mobx";

export interface ReactDocViewerProps {
    path: string;
}

export default class ReactDocViewer extends Stateless<ReactDocViewerProps> {
    public render(): JSX.Element {
        const paths = this.props.path.split("/");
        const components = ReactDocViewer.getComponents(paths);
        if (!components) {
            return (
                <Page title="Sorry." subTitle="Page/Module not found">
                    Components not found in [file: 'modules/react-docs/files.json', path: '{this.props.path}'
                </Page>
            );
        }
        return (
            this.renderAccordion(this.props.path, components)
        );
    }

    public componentDidMount() {

    }

    public renderAccordion(path: string, components: Props<any>) {
        const tabs: AccordionTabProps[] = [];
        for (const component in components) {
            tabs.push({
                name: component,
                header: component
            });
        }
        return (
            <Accordion tabs={tabs} getContent={ReactDocViewer.getContent.bind(this, path)}/>
        );
    }

    public static getContent(path: string, props: AccordionTabProps) {
        console.log(path, name);
        return System
            .import(`../../react-docs/${path}/${props.name}.json`)
            .then((module: Props<any>) => {
                return <ReactDoc value={observable(module.default || module)}/>;
            });
    }

    public static getComponents(paths: string[]) {
        let docs = reactDocs;
        for (const path of paths) {
            docs = docs[path];
            if (!docs) {
                return null;
            }
        }
        return docs;
    }
}
