import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';

import Page from '../Page';

export default class Customize extends Stateless<{}> {
    public render(): JSX.Element {
        return (
            <Page title="Customizing with Sass" subTitle="Create your own theme with a simple set of variables">
            </Page>
        );
    }
}
