import NotFound from 'modules/NotFound';
import * as React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Stateless from 'wasabi-ui/lib/Stateless';

import asyncComponent from './AsyncComponent';
import Navigation from './Navigation';
import Workspace from './Workspace';

const navigaions: Navigation[] = require('./navigations.json');

export default class Routes extends Stateless<{}> {
  public render(): JSX.Element {

    const elements: any[] = [];
    for (const navigaion of navigaions) {
      const path = `/${navigaion.path}`;
      const module = navigaion.module;
      const COMPONENT = asyncComponent(() => this.getModule(module).then(module => module.default));
      elements.push(<Route key={path} path={path} component={COMPONENT} />);
    }
    return (
      <HashRouter>
        <Workspace>
          <Switch>
            {elements}
            <Route exact path="/" render={() => (
              <Redirect to="/columns/basics" />
            )} />
            <Route component={NotFound} />
          </Switch>
        </Workspace>
      </HashRouter>

    );
  }

  getModule(module: string) {
    return System.import('modules/' + module);
  }
}
