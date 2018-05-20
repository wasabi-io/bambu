import * as React from "react";
import Stateless from "wasabi-ui/lib/Stateless";
import {HashRouter, Route, Switch} from "react-router-dom";
import WorkspaceWithRouter from "./view/Workspace";
import asyncComponent from "./util/AsyncComponent";

export default class Router extends Stateless<{}> {
    public render() {

        const dashboard = asyncComponent(() => System.import("./modules/dashboard/index").then((module: any) => module.default));
        const showcase = asyncComponent(() => System.import("./modules/documentation/Switch").then((module: any) => module.default));

        return (
            <HashRouter>
                <WorkspaceWithRouter>
                    <Switch>
                        <Route path="/documentation" component={showcase}/>
                        <Route path="/dashboard" component={dashboard}/>
                        <Route path="/" component={dashboard}/>
                    </Switch>
                </WorkspaceWithRouter>
            </HashRouter>
        );
    }

}
