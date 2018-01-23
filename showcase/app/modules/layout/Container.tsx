import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';

import Page from '../Page';

export default class Container extends Stateless<{}> {
  public render(): JSX.Element {
    return (
      <Page title="Container" subTitle="Container" hasMeta colors>

      </Page>
    );
  }
}
