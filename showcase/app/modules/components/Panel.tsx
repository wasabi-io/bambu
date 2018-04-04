import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';

import Page from '../Page';

export default class Panel extends Stateless<{}> {
    public render(): JSX.Element {
        return (
            <Page
                title="Panel"
                subTitle="A composable panel, for compact controls"
                hasMeta
                variables
            >

            </Page>
        );
    }
}
