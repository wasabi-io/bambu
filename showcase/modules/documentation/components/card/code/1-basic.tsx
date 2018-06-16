import * as React from "react";
import {Size6} from "bambu";
import {Image, ImageSize} from "bambu/lib/elements/image";
import {Card, CardContent, CardImage} from "bambu/lib/components/card";
import {Media, MediaContent, MediaLeft} from "bambu/lib/components/media";
import {SubTitle, Title} from "bambu/lib/elements/title";
import Content from "bambu/lib/elements/content/Content";

export default class Index extends React.Component<{}, {}> {
    public render() {
        return (
            <Card>
                <CardImage>
                    <Image
                        src="https://bulma.io/images/placeholders/1280x960.png"
                        alt="Placeholder image"
                    />
                </CardImage>
                <CardContent>
                    <Media>
                        <MediaLeft>
                            <Image bSize={ImageSize.is48X48}
                                   src="https://bulma.io/images/placeholders/96x96.png"
                                   alt="Placeholder image"
                            />
                        </MediaLeft>
                        <MediaContent>
                            <Title key="title" bSize={Size6.is4}>John Smith</Title>
                            <SubTitle key={"subtitle"} bSize={Size6.is6}>@johnsmith</SubTitle>
                        </MediaContent>
                    </Media>
                    <Content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br/>
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </Content>
                </CardContent>
            </Card>
        );
    }
}
