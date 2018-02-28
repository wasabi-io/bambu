import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';
import { Delete as BaseDelete } from 'rebul/lib/elements/delete';
import { Size, Color } from 'rebul/lib/base/css';
import { Tag } from 'rebul/lib/elements/tag';
import { Notification } from 'rebul/lib/elements/notification';
import { Message, MessageHeader, MessageBody } from 'rebul/lib/components/message';

import Page from '../Page';
import Snippet from '../../components/snippet';

export default class Delete extends Stateless<{}> {
  public render(): JSX.Element {
    return (
      <Page 
        title="Delete"
        subTitle="A versatile delete cross"
        hasMeta
        sizes
      >
        <div>
          <p>
            The <code>Delete</code> element is a stand-alone element that can be used in different contexts.
          </p>
          <p>
            On its own, it's a simple circle with a cross:
          </p>
        </div>
        <Snippet slices>
          <BaseDelete />
        </Snippet>
        <hr />
        <h3><b><a>#</a> Size</b></h3>
        <p>
          It comes in <strong>4 sizes</strong>:
        </p>
        <Snippet slices>
          <BaseDelete bSize={Size.small}/>
          <BaseDelete />
          <BaseDelete bSize={Size.medium}/>
          <BaseDelete bSize={Size.large}/>
        </Snippet>
        <hr />
        <h3><b><a>#</a> Combinations</b></h3>
        <p>
          Bulma uses it for the <code>Tag</code>, the <code>Notification</code>, and the <code>Message</code>:
        </p>
        <Snippet slices isScroll={false}>
          <Tag color={Color.success}>
            Hello World
            <BaseDelete bSize={Size.small}/>
          </Tag>
          <br />
          <br />
          <Notification color={Color.danger}>
            <BaseDelete tagName="button"/>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </Notification>
          <Message color={Color.info}>
            <MessageHeader>
              <span>Info</span>
              <BaseDelete tagName="button"/>
            </MessageHeader>
            <MessageBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla.
              Nullam gravida purus diam, et dictum felis venenatis efficitur.
              Aenean ac eleifend lacus, in mollis lectus. Donec sodales,
              arcu et sollicitudin porttitor, tortor urna tempor ligula,
              id porttitor mi magna a neque. Donec dui urna,
              vehicula et sem eget, facilisis sodales sem.
            </MessageBody>
          </Message>
        </Snippet>
      </Page>
    );
  }
}
