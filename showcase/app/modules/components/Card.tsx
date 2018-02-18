import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';

import Page from '../Page';

export default class Card extends Stateless<{}> {
  public render(): JSX.Element {
    return (
      <Page 
        title="Card"
        subTitle="An all-around flexible and composable component"
        hasMeta
        variables
      >

      </Page>
    );
  }
}
