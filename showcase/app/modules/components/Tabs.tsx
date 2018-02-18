import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';

import Page from '../Page';

export default class Tabs extends Stateless<{}> {
  public render(): JSX.Element {
    return (
      <Page 
        title="Tabs"
        subTitle="Simple responsive horizontal navigation tabs, with different styles"
        hasMeta
        variables
        sizes
      >

      </Page>
    );
  }
}
