import * as React from "react";
import Stateless from "component/Stateless";
import {observer} from "mobx-react";
import {observable} from "mobx";
import {Color, Size6} from "bambu";
import Strings from "wasabi-common/lib/types/Strings";
import PagesProps from "../../documentation/PagesProps";
import documentPaths, {PathProps} from "../../documentation/documentPaths";
import Loading from "component/layout/loading/Loading";
import Page from "component/layout/Page";
import MessageView from "component/layout/message/MessageView";
import {MenuViewHeaderItem} from "component/elements/MenuView";
import HeaderView from "../../view/header/HeaderView";
import NotFound from "../../../view/NotFound";
import ReactDocViewer from "../../view/react/ReactDocViewer";
import pageStyle from "../../../css/pageStyle";
import PageReference from "./PageReference";
import LazyComponent from "../../../component/lazy/LazyComponent";
import {has} from "wasabi-common";

export interface DynamicPageContentProps {
    paths: string[];
}

export interface DynamicPageLoadingProps {
    path: string;
    module: PagesProps | Error;
}

const items: MenuViewHeaderItem[] = [{
    header: "Components",
    items: [
        {
            header: "breadcrumb",
            items: [
                {
                    header: "BreadCrumb"
                },
                {
                    header: "BreadCrumbItem"
                }
            ]
        },
        {
            header: "card",
            items: [
                {header: "Card"},
                {header: "CardContent"},
                {header: "CardFooter"},
                {header: "CardFooterItem"},
                {header: "CardHeader"},
                {header: "CardHeaderIcon"},
                {header: "CardImage"}
            ]
        }]
}];

@observer
export default class DynamicPage extends Stateless <DynamicPageContentProps> {
    private static readonly MODULE_PATH = "/components";
    @observable
    private currentPage: Error | PagesProps;
    private currentPath: string;

    public constructor(props: any) {
        super(props);
    }

    public render() {
        const currentPage = this.currentPage;
        if (!currentPage) {
            return (
                <div>
                    <Loading/>
                </div>
            );
        }
        const breads = this.currentPath.split("/");

        if (currentPage instanceof Error) {
            let message = currentPage.message;
            if (message && Strings.endsWith(message, DynamicPage.MODULE_PATH + "'")) {
                message = message.substring(0, message.length - (DynamicPage.MODULE_PATH + "'").length) + "'";
            }
            return (
                <div>
                    <HeaderView breads={breads}>
                        <NotFound>
                            <MessageView color={Color.danger}>
                                {message}
                            </MessageView>
                        </NotFound>
                    </HeaderView>
                </div>
            );
        }
        return (
            <div>
                <div className={pageStyle.bPageContent}>
                    <HeaderView breads={breads}>
                        <Page
                            className={pageStyle.bdHeaderSection}
                            headerClassName={pageStyle.bPageComponentHeader}
                            header={currentPage.title}
                            headerSize={Size6.is4}
                            subTitle={currentPage.subTitle}
                            subTitleSize={Size6.is4}
                            icon={currentPage.icon}
                        />
                        <hr key={`pageHR-${this.id}`} style={{margin: 0, padding: 0}}/>
                    </HeaderView>
                    {currentPage.children && (
                        <nav key={`nav-${this.currentPath}`} className={pageStyle.bdLinks}>
                            <PageReference childMap={currentPage.children} breads={breads}/>
                        </nav>
                    )}
                    {currentPage.componentPath && (
                        <ReactDocViewer path={currentPage.componentPath}/>
                    )}
                    {has(currentPage.module) && (
                        <div className={pageStyle.bPageComponentContent}>
                            <LazyComponent getComponent={() => DynamicPage.renderModulePage(currentPage.module)}/>
                        </div>
                    )}
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }

    public componentDidMount() {
        this.getPage();
    }

    public componentDidUpdate() {
        this.getPage();
    }

    public getPage() {
        const paths = this.props.paths.slice(0);
        let pathNode: PathProps = documentPaths;

        const documents: string[] = [];
        for (const path of paths) {
            const node = pathNode[path];
            if (node) {
                if (node instanceof Array || typeof node === "boolean") {
                    documents.push(path);
                    break;
                } else {
                    documents.push(path);
                    pathNode = node;
                }
            } else {
                documents.push(path);
                break;
            }
        }

        const documentPath = documents.join("/");
        if (this.currentPath !== documentPath) {
            this.currentPath = documentPath;
            DynamicPage
                .documentPageLoader(documents)
                .then((module: any) => {
                    this.currentPage = module.default || module;
                })
                .catch((error) => {
                    this.currentPage = error;
                });
        }
    }

    public static documentPageLoader = (paths: string[]): Promise<any> => {
        let docPath = paths.slice(1).join("/");
        docPath = docPath !== "" ? `/${docPath}` : "";
        return System.import(`../../documentation${docPath}/components`).then((module: any) => module.default);
    }

    public static renderModulePage(modulePath: string): Promise<React.ComponentClass<any>> {
        return System.import(`../../documentation${modulePath}/index`)
            .then((module: any) => module.default || module);
    }

}
