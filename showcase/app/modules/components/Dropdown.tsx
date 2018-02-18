import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';

import Page from '../Page';

export default class Dropdown extends Stateless<{}> {
  public render(): JSX.Element {
    return (
      <Page 
        title="Dropdown"
        subTitle="An interactive dropdown menu for discoverable content"
        hasMeta
        variables
      >

      </Page>
    );
  }
}
