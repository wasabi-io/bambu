import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';

import Page from '../Page';

export default class Navbar extends Stateless<{}> {
  public render(): JSX.Element {
    return (
      <Page 
        title="Navbar"
        subTitle="A responsive horizontal navbar that can support images, links, buttons, and dropdowns"
        hasMeta
        variables
        colors
      >

      </Page>
    );
  }
}
