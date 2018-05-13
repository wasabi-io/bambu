import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';
import {Box as BaseBox} from 'bambu/lib/elements/box';
import {Image, ImageSize} from 'bambu/lib/elements/image';
import {Responsive} from 'bambu/lib/base/css';
import {Icon, IconSize} from 'bambu/lib/elements/icon';
import {Media, MediaContent, MediaLeft} from 'bambu/lib/components/media';
import {Level, LevelLeft, LevelItem} from 'bambu/lib/components/level';

import Page from '../Page';
import Snippet from '../../components/snippet';

export default class Box extends Stateless<{}> {
    public render(): JSX.Element {
        return (
            <Page
                title="Box"
                subTitle="A white box to contain other elements"
                hasMeta
                variables
            >
                <div>
                    <p>
                        The <code>Box</code> element is simply a container with a shadow, a border, a radius, and some padding.
                        <br/>
                        For example, you can include a media object:
                    </p>
                </div>
                <Snippet slices>
                    <BaseBox>
                        <Media>
                            <MediaLeft>
                                <Image
                                    bSize={ImageSize.is64X64}
                                    src="https://bulma.io/images/placeholders/128x128.png"
                                    alt="Image"
                                />
                            </MediaLeft>
                            <MediaContent>
                                <p>
                                    <strong>John Smith</strong>
                                    <small>@johnsmith</small>
                                    <small>31m</small>
                                    <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                </p>
                                <Level responsive={Responsive.mobile}>
                                    <LevelLeft>
                                        <LevelItem><Icon icon="fa-reply"/></LevelItem>
                                        <LevelItem><Icon icon="fa-retweet"/></LevelItem>
                                        <LevelItem><Icon icon="fa-heart"/></LevelItem>
                                    </LevelLeft>
                                </Level>
                            </MediaContent>
                        </Media>
                    </BaseBox>
                </Snippet>
            </Page>
        );
    }
}
