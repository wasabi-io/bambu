import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';

import Page from '../Page';

export default class Start extends Stateless<{}> {
    public render(): JSX.Element {
        return (
            <Page title="Getting started" subTitle="You only need 1 CSS file to use Bulma" hasMeta colors>
                <p>There are several ways to <strong>get started</strong> with Bulma. You can either:</p>
                <ol>
                    <li>
                        use <strong>npm</strong> to install the Bulma package
        </li>
                    <li>
                        use the cdnjs <strong>CDN</strong> to link to the Bulma stylesheet
        </li>
                    <li>
                        use the <strong>GitHub repository</strong> to get the latest development version
        </li>
                </ol>
            </Page>
        );
    }
}