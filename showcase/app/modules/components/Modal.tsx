import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';

import Page from '../Page';

export default class Modal extends Stateless<{}> {
  public render(): JSX.Element {
    return (
      <Page 
        title="Modal"
        subTitle="A classic modal overlay, in which you can include any content you want"
        hasMeta
        variables
      >

      </Page>
    );
  }
}
