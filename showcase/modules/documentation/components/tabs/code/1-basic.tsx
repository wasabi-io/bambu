import * as React from "react";
import {Tab, Tabs} from "bambu/lib/components/tabs";

export default class Index extends React.Component <{}, {}> {
    public render() {
        return (
            <Tabs>
                <Tab isActive><a>Pictures</a></Tab>
                <Tab><a>Music</a></Tab>
                <Tab><a>Videos</a></Tab>
                <Tab><a>Documents</a></Tab>
            </Tabs>
        );
    }
}
