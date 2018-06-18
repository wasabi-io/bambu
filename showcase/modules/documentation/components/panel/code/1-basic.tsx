import * as React from "react";
import {Panel, PanelBlock, PanelHeading, PanelTabs} from "bambu/lib/components/panel";
import {Control, Input} from "bambu/lib/form";
import {Size} from "bambu";
import {FaIcon, Icon} from "bambu/lib/elements/icon";
import bulma from "bambu/lib/base/css/bulma";
import PanelIcon from "bambu/lib/components/panel/PanelIcon";
import {Button} from "bambu/lib/elements/button";

export default class Index extends React.Component <{}, {}> {
    public render() {
        return (
            <Panel>
                <PanelHeading>repositories</PanelHeading>
                <PanelBlock>
                    <Control hasIconsLeft>
                        <Input bSize={Size.small} placeholder="search"/>
                        <Icon bSize={Size.small} className={bulma.isLeft}>
                            <FaIcon name="search"/>
                        </Icon>
                    </Control>
                </PanelBlock>
                <PanelTabs>
                    <a className={bulma.isActive}>all</a>
                    <a>public</a>
                    <a>private</a>
                    <a>sources</a>
                    <a>forks</a>
                </PanelTabs>
                <PanelBlock isActive>
                    <PanelIcon><FaIcon name="book"/></PanelIcon>
                    bambu
                </PanelBlock>
                <PanelBlock>
                    <PanelIcon><FaIcon name="book"/></PanelIcon>
                    marksheet
                </PanelBlock>
                <PanelBlock>
                    <PanelIcon><FaIcon name="book"/></PanelIcon>
                    minireset.css
                </PanelBlock>
                <PanelBlock>
                    <PanelIcon><FaIcon name="book"/></PanelIcon>
                    jgthms.github.io
                </PanelBlock>
                <PanelBlock>
                    <PanelIcon><FaIcon name="code-branch"/></PanelIcon>
                    daniellowtw/infboard
                </PanelBlock>
                <PanelBlock>
                    <PanelIcon><FaIcon name="code-branch"/></PanelIcon>
                    mojs
                </PanelBlock>
                <PanelBlock>
                    <input type="checkbox"/>
                    remember me
                </PanelBlock>
                <PanelBlock>
                    <Button isLink isOutlined isFullwidth>
                        reset all filters
                    </Button>
                </PanelBlock>
            </Panel>
        );
    }
}
