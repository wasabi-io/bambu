import * as React from 'react';
import Stateless from 'component/Stateless';
import Page from '../component/layout/Page';

export default class NotFound extends Stateless<{}> {
    public render(): JSX.Element {
        return (
            <Page header={() => "Sorry."} subTitle={() => "Page/Module not found"}>
                {this.props.children}
            </Page>
        );
    }
}
