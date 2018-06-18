import * as React from "react";
import {Tab, Tabs} from "bambu/lib/components/tabs";
import {FaIcon, Icon} from "bambu/lib/elements/icon";

export default class Index extends React.Component <{}, {}> {
    public render() {
        return (
            <Tabs isFullwidth>
                <Tab isActive>
                    <a>
                        <Icon><FaIcon name="angle-left"/></Icon>
                        Left
                    </a>
                </Tab>
                <Tab>
                    <a>
                        <Icon><FaIcon name="angle-up"/></Icon>
                        Up
                    </a>
                </Tab>
                <Tab>
                    <a>
                        <Icon><FaIcon name="angle-right"/></Icon>
                        Right
                    </a>
                </Tab>
            </Tabs>
        );
    }
}
