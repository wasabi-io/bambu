import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import { Tab, Tabs } from 'rebul/lib/components/tabs';
import { Container } from 'rebul/lib/elements/container';
import Stateless from 'wasabi-ui/lib/Stateless';

import asyncComponent from './AsyncComponent';
import Navigation from './Navigation';
import locationStore from './stores/LocationStore';

abstract class StatelessComponent extends Stateless<{ match: { url: string } }> {
  abstract getNavigations(): Navigation[];
  abstract getModuleName(): string;

  public render(): JSX.Element {
    const match = this.props.match;
    const paths = locationStore.getPaths();
    const tabs: any[] = [];
    const routes: any[] = [];

    for (const navigaion of this.getNavigations()) {
      const path = `${match.url}/${navigaion.path}`;
      const module = navigaion.module;
      tabs.push(<Tab key={navigaion.path} isActive={paths[1] === navigaion.path}><Link to={path}>{navigaion.text}</Link></Tab>);
      const COMPONENT = asyncComponent(() => this.getModule(module).then(module => module.default));
      routes.push(<Route key={path} path={path} component={COMPONENT} />);
    }


    return (
      <Container>
        <Container>
          <Tabs>
            {tabs}
          </Tabs>
        </Container>
        {routes}
      </Container>
    );

  }

  getModule(module: string) {
    return System.import(`modules/${this.getModuleName()}/${module}`);
  }
}

export default StatelessComponent;
