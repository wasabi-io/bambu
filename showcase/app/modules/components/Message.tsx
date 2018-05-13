import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';
import {
    Message as BaseMessage,
    MessageHeader,
    MessageBody
} from 'bambu/lib/components/message';
import {Delete} from 'bambu/lib/elements/delete';
import {Color, Size} from 'bambu/lib/base/css';

import Page from '../Page';
import Snippet from '../../components/snippet';

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
                <Snippet slices scrolless>
                    <BaseMessage>
                        <MessageHeader>
                            <p>Hello World</p>
                            <Delete/>
                        </MessageHeader>
                        <MessageBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                            Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
                            arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </MessageBody>
                    </BaseMessage>
                </Snippet>
                <h3><b><a>#</a> Colors</b></h3>
                <Snippet slices scrolless>
                    <BaseMessage color={Color.dark}>
                        <MessageHeader>
                            <p>Dark</p>
                            <Delete/>
                        </MessageHeader>
                        <MessageBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                            Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
                            arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </MessageBody>
                    </BaseMessage>
                    <BaseMessage color={Color.primary}>
                        <MessageHeader>
                            <p>Primary</p>
                            <Delete/>
                        </MessageHeader>
                        <MessageBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                            Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
                            arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </MessageBody>
                    </BaseMessage>
                    <BaseMessage color={Color.link}>
                        <MessageHeader>
                            <p>Link</p>
                            <Delete/>
                        </MessageHeader>
                        <MessageBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                            Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
                            arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </MessageBody>
                    </BaseMessage>
                    <BaseMessage color={Color.info}>
                        <MessageHeader>
                            <p>Info</p>
                            <Delete/>
                        </MessageHeader>
                        <MessageBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                            Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
                            arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </MessageBody>
                    </BaseMessage>
                    <BaseMessage color={Color.success}>
                        <MessageHeader>
                            <p>Success</p>
                            <Delete/>
                        </MessageHeader>
                        <MessageBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                            Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
                            arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </MessageBody>
                    </BaseMessage>
                    <BaseMessage color={Color.warning}>
                        <MessageHeader>
                            <p>Warrning</p>
                            <Delete/>
                        </MessageHeader>
                        <MessageBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                            Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
                            arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </MessageBody>
                    </BaseMessage>
                    <BaseMessage color={Color.danger}>
                        <MessageHeader>
                            <p>Danger</p>
                            <Delete/>
                        </MessageHeader>
                        <MessageBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                            Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
                            arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </MessageBody>
                    </BaseMessage>
                </Snippet>
                <hr/>
                <h3><b><a>#</a> Message body only </b></h3>
                <p>You can <strong>omit</strong> the message header:</p>
                <Snippet slices scrolless>
                    <BaseMessage color={Color.dark}>
                        <MessageBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                            Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
                            arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </MessageBody>
                    </BaseMessage>
                    <BaseMessage color={Color.primary}>
                        <MessageBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                            Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
                            arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </MessageBody>
                    </BaseMessage>
                    <BaseMessage color={Color.link}>
                        <MessageBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                            Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
                            arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </MessageBody>
                    </BaseMessage>
                    <BaseMessage color={Color.info}>
                        <MessageBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                            Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
                            arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </MessageBody>
                    </BaseMessage>
                    <BaseMessage color={Color.success}>
                        <MessageBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                            Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
                            arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </MessageBody>
                    </BaseMessage>
                    <BaseMessage color={Color.warning}>
                        <MessageBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                            Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
                            arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </MessageBody>
                    </BaseMessage>
                    <BaseMessage color={Color.danger}>
                        <MessageBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                            Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
                            arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </MessageBody>
                    </BaseMessage>
                </Snippet>
                <hr/>
                <h3><b><a>#</a> Message body only </b></h3>
                <Snippet slices scrolless>
                    <BaseMessage bSize={Size.small}>
                        <MessageHeader>
                            <p>Small message</p>
                            <Delete/>
                        </MessageHeader>
                        <MessageBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                            Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
                            arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </MessageBody>
                    </BaseMessage>
                </Snippet>
                <Snippet slices scrolless>
                    <BaseMessage>
                        <MessageHeader>
                            <p>Normal message</p>
                            <Delete/>
                        </MessageHeader>
                        <MessageBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                            Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
                            arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </MessageBody>
                    </BaseMessage>
                </Snippet>
                <Snippet slices scrolless>
                    <BaseMessage bSize={Size.medium}>
                        <MessageHeader>
                            <p>Medium message</p>
                            <Delete/>
                        </MessageHeader>
                        <MessageBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                            Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
                            arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </MessageBody>
                    </BaseMessage>
                </Snippet>
                <Snippet slices scrolless>
                    <BaseMessage bSize={Size.large}>
                        <MessageHeader>
                            <p>Large message</p>
                            <Delete/>
                        </MessageHeader>
                        <MessageBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                            Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
                            arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                            Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </MessageBody>
                    </BaseMessage>
                </Snippet>
            </Page>
        );
    }
}
