import * as React from 'react';
import Stateless from 'component/Stateless';
import Page from '../../../component/layout/Page';
import * as reactDocs from "../../react-docs/files.json";
import Accordion from "../../../component/layout/accordion/Accordion";
import {Props} from "wasabi-common";
import {AccordionTabProps} from "../../../component/layout/accordion";
import ReactDoc from "./ReactDoc";
import {observable} from "mobx";
import {SubTitle} from "bambu/lib/elements/title";
import {Size6} from "bambu";
import {Tags} from "bambu/lib/elements/tag";
import Tag from "bambu/lib/elements/tag/Tag";

export interface ReactDocViewerProps {
    path: string;
}

export default class ReactDocViewer extends Stateless<ReactDocViewerProps> {
    public render(): JSX.Element {
        const paths = this.props.path.split("/");
        const components = ReactDocViewer.getComponents(paths);
        if (!components) {
            return (
                <Page header={() => "Sorry."} subTitle={() => "Page/Module not found"}>
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
            const values = components[component];
            const header = `<${component} />`;
            tabs.push({
                name: component,
                renderer: (id: string, props: AccordionTabProps) => ReactDocViewer.renderDocDescription(id, props, values),
                header: <code>{header}</code>
            });
        }
        return (
            <Accordion tabs={tabs} getContent={ReactDocViewer.getContent.bind(this, path)}/>
        );
    }

    public static renderDocDescription(id: string, props: AccordionTabProps, values: any) {
        const key = `at-${props.name}-${id}`;
        return (
            <>
                <input key={key} id={key} onChange={(e?: any) => {
                    e.target.value = e.target.checked;
                    props.onToggle(props.name);
                }} type="checkbox" checked={props.name === props.activeTab} name={props.name}/>
                <label style={{backgroundColor: "whitesmoke"}} key={`${key}-label`} htmlFor={key}>
                    <Tags style={{margin: 0, padding: "5px"}}>
                        <Tag><SubTitle bSize={Size6.is5}>{props.header}</SubTitle></Tag>
                        <Tag style={{display: "contents"}}>
                            <blockquote>
                                <small
                                    dangerouslySetInnerHTML={{__html: ReactDocViewer.renderSubTitles(props, values).join("\n")}}
                                />
                            </blockquote>
                        </Tag>
                    </Tags>
                </label>
            </>
        );
    }

    public static renderSubTitles(props: AccordionTabProps, values: any) {
        if (!Array.isArray(values)) {
            return [];
        }
        const elements = [];
        for (const item of values) {
            if (item.description) {
                elements.push(item.description);
            }
        }
        return (
            elements
        );
    }

    public static getContent(path: string, props: AccordionTabProps) {
        return import(`../../react-docs/${path}/${props.name}.json`)
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
