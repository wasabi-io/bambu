import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';

import Page from '../Page';

export default class Message extends Stateless<{}> {
  public render(): JSX.Element {
    return (
      <Page 
        title="Message"
        subTitle="Colored message blocks, to emphasize part of your page"
        hasMeta
        variables
        sizes
        colors
      >

      </Page>
    );
  }
}
