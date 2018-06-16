import * as React from "react";
import {Card, CardContent, CardFooter, CardFooterItem} from "bambu/lib/components/card";
import {SubTitle, Title} from "bambu/lib/elements/title";

export default class Index extends React.Component<{}, {}> {
    public render() {
        return (
            <Card>
                <CardContent>
                    <Title key="title">
                        “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                    </Title>
                    <SubTitle key="subtitle">
                        Jeff Atwood
                    </SubTitle>
                </CardContent>
                <CardFooter>
                    <CardFooterItem tagName="p">
                        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
                    </CardFooterItem>
                    <CardFooterItem tagName="p">
                        Share on <a href="#">Facebook</a>
                    </CardFooterItem>
                </CardFooter>
            </Card>
        );
    }
}
