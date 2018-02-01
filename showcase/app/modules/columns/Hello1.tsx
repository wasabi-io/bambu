import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';

import Page from '../Page';

export default class Hello1 extends Stateless<{}> {
  public render(): JSX.Element {
    return (
      <Page title="Hello1" subTitle="You only need 1 CSS file to use Bulma" hasMeta colors>

      </Page>
    );
  }
}
