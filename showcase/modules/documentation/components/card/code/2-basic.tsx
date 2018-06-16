import * as React from "react";
import {Card, CardContent, CardFooter, CardFooterItem, CardHeader, CardHeaderIcon, CardHeaderTitle} from "bambu/lib/components/card";
import Content from "bambu/lib/elements/content/Content";
import {FaIcon} from "bambu/lib/elements/icon";

export default class Index extends React.Component<{}, {}> {
    public render() {
        return (
            <Card>
                <CardHeader>
                    <CardHeaderTitle>
                        Component
                    </CardHeaderTitle>
                    <CardHeaderIcon>
                        <FaIcon name="angle-down" ariaHidden/>
                    </CardHeaderIcon>
                </CardHeader>
                <CardContent>
                    <Content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                        <br/>
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </Content>
                </CardContent>
                <CardFooter>
                    <CardFooterItem tagName="a" href="#">Save</CardFooterItem>
                    <CardFooterItem tagName="a" href="#">Edit</CardFooterItem>
                    <CardFooterItem tagName="a" href="#">Delete</CardFooterItem>
                </CardFooter>
            </Card>
        );
    }
}
