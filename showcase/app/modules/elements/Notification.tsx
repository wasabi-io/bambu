import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';
import {Color} from 'rebul/lib/base/css';
import {Notification as BaseNotification} from 'rebul/lib/elements/notification';
import {Delete} from 'rebul/lib/elements/delete';

import Page from '../Page';
import Snippet from '../../components/snippet';

export default class Notification extends Stateless<{}> {
    public render(): JSX.Element {
        return (
            <Page
                title="Notification"
                subTitle="Bold notification blocks, to alert your users of something"
                hasMeta
                colors
                variables
            >
                <Snippet slices>
                    <BaseNotification>
                        <Delete/>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis
                        venenatis</a> efficitur. Sit amet,
                        consectetur adipiscing elit
                    </BaseNotification>
                </Snippet>
                <hr/>
                <h3><b><a>#</a> Colors</b></h3>
                <Snippet slices scrolless>
                    <BaseNotification color={Color.primary}>
                        <Delete/>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis
                        venenatis</a> efficitur. Sit amet,
                        consectetur adipiscing elit
                    </BaseNotification>
                    <BaseNotification color={Color.link}>
                        <Delete/>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis
                        venenatis</a> efficitur. Sit amet,
                        consectetur adipiscing elit
                    </BaseNotification>
                    <BaseNotification color={Color.info}>
                        <Delete/>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis
                        venenatis</a> efficitur. Sit amet,
                        consectetur adipiscing elit
                    </BaseNotification>
                    <BaseNotification color={Color.success}>
                        <Delete/>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis
                        venenatis</a> efficitur. Sit amet,
                        consectetur adipiscing elit
                    </BaseNotification>
                    <BaseNotification color={Color.warning}>
                        <Delete/>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis
                        venenatis</a> efficitur. Sit amet,
                        consectetur adipiscing elit
                    </BaseNotification>
                    <BaseNotification color={Color.danger}>
                        <Delete/>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis
                        venenatis</a> efficitur. Sit amet,
                        consectetur adipiscing elit
                    </BaseNotification>
                </Snippet>
            </Page>
        );
    }
}
