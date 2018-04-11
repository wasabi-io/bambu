import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';
import {Color, Size} from 'bambu/lib/base/css';
import {Progress as BaseProgress} from 'bambu/lib/elements/progress';

import Page from '../Page';
import Snippet from '../../components/snippet';

export default class Progress extends Stateless<{}> {
    public render(): JSX.Element {
        return (
            <Page
                title="Progress bars"
                subTitle="Native HTML progress bars"
                hasMeta
                sizes
                colors
                variables
            >
                <Snippet slices>
                    <BaseProgress value={15} max={100}>%15</BaseProgress>
                </Snippet>
                <hr/>
                <h3><b><a>#</a> Colors</b></h3>
                <Snippet slices>
                    <BaseProgress color={Color.primary} value={15} max={100}>15%</BaseProgress>
                    <BaseProgress color={Color.link} value={30} max={100}>30%</BaseProgress>
                    <BaseProgress color={Color.info} value={45} max={100}>45%</BaseProgress>
                    <BaseProgress color={Color.success} value={60} max={100}>60%</BaseProgress>
                    <BaseProgress color={Color.warning} value={75} max={100}>75%</BaseProgress>
                    <BaseProgress color={Color.danger} value={75} max={100}>90%</BaseProgress>
                </Snippet>
                <hr/>
                <h3><b><a>#</a> Sizes</b></h3>
                <Snippet slices>
                    <BaseProgress size={Size.small} value={15} max={100}>15%</BaseProgress>
                    <BaseProgress value={30} max={100}>30%</BaseProgress>
                    <BaseProgress size={Size.medium} value={45} max={100}>45%</BaseProgress>
                    <BaseProgress size={Size.large} value={60} max={100}>60%</BaseProgress>
                </Snippet>
            </Page>
        );
    }
}
