import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';

import Page from '../Page';

export default class Menu extends Stateless<{}> {
  public render(): JSX.Element {
    return (
      <Page 
        title="Menu"
        subTitle="A simple menu, for any type of vertical navigation"
        hasMeta
        variables
      >

      </Page>
    );
  }
}
