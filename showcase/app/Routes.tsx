import NotFound from 'modules/NotFound';
import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Stateless from 'wasabi-ui/lib/Stateless';

import asyncComponent from './AsyncComponent';
import Workspace from './Workspace';

const navigaions = [
    {
        "text": "Overview",
        "path": "overview",
        "module": "overview/index.tsx"
    },
    {
        "text": "Columns",
        "path": "columns",
        "module": "columns/index.tsx"
    }
];

export default class Routes extends Stateless<{}> {
    public render(): JSX.Element {

        let elements: any[] = [];
        for (let navigaion of navigaions) {
            const path = `/${navigaion.path}`;
            const module = navigaion.module;
            const Component = asyncComponent(() => this.getModule(module).then(module => module.default))
            elements.push(<Route key={path} path={path} component={Component} />);
        }
        return (
            <BrowserRouter>
                <Workspace>
                    <Switch>
                        {elements}
                        <Route exact path="/" render={() => (
                            <Redirect to="/overview/start/" />
                        )} />
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