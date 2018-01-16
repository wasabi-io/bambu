import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';

import Page from './Page';

export default class NotFound extends Stateless<{}> {
    public render(): JSX.Element {
        return (
            <Page title="Sorry." subTitle="Page/Module not found">
            </Page>
        );
    }
}