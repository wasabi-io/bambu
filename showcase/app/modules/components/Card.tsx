import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';
import {
  Card as BaseCard,
  CardHeader,
  CardHeaderIcon,
  CardHeaderTitle,
  CardContent,
  CardFooter,
  CardFooterItem,
  CardImage,
} from 'rebul/lib/components/card';
import { Size6 } from 'rebul/lib/base/css';
import { Image, ImageSize } from 'rebul/lib/elements/image';
import { Media, MediaLeft, MediaContent } from 'rebul/lib/components/media';
import { Title, SubTitle } from 'rebul/lib/elements/title';
import { Content } from 'rebul/lib/elements/content';
import { Icon } from 'rebul/lib/elements/icon';

import Page from '../Page';
import Snippet from '../../components/snippet';

export default class Card extends Stateless<{}> {
  public render(): JSX.Element {
    return (
      <Page 
        title="Card"
        subTitle="An all-around flexible and composable component"
        hasMeta
        variables
      >
        <Content>
          <p>The <strong>Card</strong> component comprises several elements that you can mix and match:</p>
          <ul>
            <li>
              <code>Card</code>: the main container
              <ul>
                <li>
                  <code>CardHeader</code>: a horizontal bar with a shadow
                  <ul>
                    <li>
                      <code>CardHeaderTitle</code>: a left-aligned bold text
                    </li>
                    <li>
                      <code>CardHeaderIcon</code>: a placeholder for an icon
                    </li>
                  </ul>
                </li>
                <li>
                  <code>CardImage</code>: a fullwidth container for a responsive image
                </li>
                <li>
                  <code>CardContent</code>: a multi-purpose container for <em>any</em> other element
                </li>
                <li>
                  <code>CardFooter</code>: a horizontal list of controls
                  <ul>
                    <li>
                      <code>CardFooter-item</code>: a repeatable list item
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </Content>
        <Snippet slices>
          <BaseCard>
            <CardImage>
              <Image src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
            </CardImage>
            <CardContent>
              <Media>
                <MediaLeft>
                  <Image 
                    size={ImageSize.is48X48}
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </MediaLeft>
                <MediaContent>
                  <Title size={Size6.is4}>John Smith</Title>
                  <SubTitle size={Size6.is6}>@johnsmith</SubTitle>
                </MediaContent>
              </Media>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time>11:09 PM - 1 Jan 2016</time>
              </Content>
            </CardContent>
          </BaseCard>
        </Snippet> 
        <hr />
        <Snippet slices>
          <BaseCard>
            <CardHeader>
              <CardHeaderTitle> Component </CardHeaderTitle>
              <CardHeaderIcon><Icon icon="fa-angle-down"/> </CardHeaderIcon>
            </CardHeader>
            <CardContent>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time>11:09 PM - 1 Jan 2016</time>
              </Content>
            </CardContent>
            <CardFooter>
              <CardFooterItem tagName="a">Save</CardFooterItem>
              <CardFooterItem tagName="a">Edit</CardFooterItem>
              <CardFooterItem tagName="a">Delete</CardFooterItem>
            </CardFooter>
          </BaseCard>
        </Snippet> 
        <hr />
        <Snippet slices>
          <BaseCard>
            <CardContent>
              <Content>
                <Title> “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.” </Title>
                <SubTitle> Jeff Atwood </SubTitle>
              </Content>
            </CardContent>
            <CardFooter>
              <CardFooterItem>
                <span>
                  View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
                </span>
              </CardFooterItem>
              <CardFooterItem>
                <span>
                  Share on <a href="#">Facebook</a>
                </span>
              </CardFooterItem>
            </CardFooter>
          </BaseCard>
        </Snippet> 
      </Page>
    );
  }
}
