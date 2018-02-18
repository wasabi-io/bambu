import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';

import Page from '../Page';

export default class Pagination extends Stateless<{}> {
  public render(): JSX.Element {
    return (
      <Page 
        title="Pagination"
        subTitle="A responsive, usable, and flexible paginations"
        hasMeta
        variables
        sizes
      >

      </Page>
    );
  }
}
