import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Stateless from 'wasabi-ui/lib/Stateless';
import asyncComponent from './AsyncComponent';
import NotFound from 'modules/NotFound';
import Overview from 'modules/overview';
import Workspace from './Workspace';

const navigaions = [
    {
        "text": "Overview",
        "path": "overview/start",
        "module": "overview"
    },
    {
        "text": "Columns",
        "path": "columns/start",
        "module": "columns"
    }
];

export default class Routes extends Stateless<{}> {
    public render(): JSX.Element {

        let elements: any[] = [];
        // for (let navigaion of navigaions) {
        //     const path = `/${navigaion.path}`;
        //     const module = navigaion.module;
        //     const Component = asyncComponent(() => this.getModule(module).then(module => module.default))
        //     elements.push(<Route key={path} exact path={path} component={Component} />);
        // }
        return (
            <BrowserRouter>
                <Workspace>
                    <Switch>
                        <Route path="/" exact component={Overview} />
                        <Route exact path="/" render={() => (
                            <Redirect to="/overview/start/" />
                        )} />
                        {elements}
                        <Route component={NotFound} />
                    </Switch>
                </Workspace>
            </BrowserRouter>

        );
    }

    getModule(module: string) {
        return System.import("modules/" + module);
    }
}