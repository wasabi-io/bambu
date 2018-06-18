import * as React from "react";
import Stateless from "component/Stateless";
import DocStore from "../store/DocStore";
import {toJS} from "mobx";
import pageStyle from "../../css/pageStyle";
import {observer} from "mobx-react";
import DynamicPage from "./page/DynamicPage";
import Container from "bambu/lib/elements/container/Container";

export interface PageRouterProps {
    store: DocStore;
}

@observer
export default class Index extends Stateless <PageRouterProps> {
    public render() {
        const {paths} = this.props.store;
        const breads = (toJS(paths) || []).slice(0);
        const pages = breads.slice(0);
        return (
            <Container className={pageStyle.bPageContainer}>
                <div className={pageStyle.bPageContent}>
                    {<DynamicPage paths={pages}/>}
                </div>
            </Container>
        );
    }
}
