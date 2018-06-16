import * as React from "react";
import {Stateless} from "wasabi-ui";
import {observer} from "mobx-react";
import {observable} from "mobx";
import PagesProps from "../../documentation/PagesProps";
import Loading from "component/layout/loading/Loading";
import HeaderView from "../../view/header/HeaderView";
import NotFound from "../../../view/NotFound";
import Strings from "wasabi-common/lib/types/Strings";
import pageStyle from "../../../css/pageStyle";
import Page from "../../../component/layout/Page";
import {Color, Size6} from "bambu";
import MessageView from "../../../component/layout/message/MessageView";
import PageReference from "./PageReference";
import documentPaths, {PathProps} from "../../documentation/documentPaths";
import {MenuViewHeaderItem} from "../../../component/elements/MenuView";
import ReactDocViewer from "../../view/react/ReactDocViewer";

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
                <div className={pageStyle.bdContent}>
                    <HeaderView breads={breads}>
                        <Page
                            className={pageStyle.bdHeaderSection}
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
        console.log(docPath);
        return System.import(`../../documentation${docPath}/components`).then((module: any) => module.default);
    }
}
