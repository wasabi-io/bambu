import * as React from "react";
import {Tab, Tabs} from "bambu/lib/components/tabs";
import {FaIcon, Icon} from "bambu/lib/elements/icon";
import {Size} from "bambu";

export default class Index extends React.Component <{}, {}> {
    public render() {
        return (
            <Tabs isCentered isBoxed>
                <Tab isActive>
                    <a>
                        <Icon bSize={Size.small}><FaIcon name="image"/></Icon>
                        Pictures
                    </a>
                </Tab>
                <Tab>
                    <a>
                        <Icon bSize={Size.small}><FaIcon name="music"/></Icon>
                        Music
                    </a>
                </Tab>
                <Tab>
                    <a>
                        <Icon bSize={Size.small}><FaIcon name="film"/></Icon>
                        Videos
                    </a>
                </Tab>
                <Tab>
                    <a>
                        <Icon bSize={Size.small}><FaIcon name="file-alt"/></Icon>
                        Documents
                    </a>
                </Tab>
            </Tabs>
        );
    }
}
