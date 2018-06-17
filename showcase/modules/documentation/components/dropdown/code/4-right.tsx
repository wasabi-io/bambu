import * as React from "react";
import {Dropdown, DropdownContent, DropdownItem, DropdownMenu, DropdownTrigger} from "bambu/lib/components/dropdown";
import {Button} from "bambu/lib/elements/button";
import {FaIcon, Icon} from "bambu/lib/elements/icon";
import {observer} from "mobx-react";
import {observable} from "mobx";
import {bulma, Size} from "bambu";
import {Level, LevelItem, LevelLeft, LevelRight} from "bambu/lib/layout/level";

@observer
export default class Index extends React.Component<{}, {}> {
    @observable
    private isActive: boolean = false;

    @observable
    private isRightActive: boolean = false;

    public constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Level className={bulma.isMobile}>
                    <LevelLeft>
                        <LevelItem>
                            <Dropdown isActive={this.isActive}>
                                <DropdownTrigger onClick={this.onClick}>
                                    <Button>
                                        <span>Left aligned</span>
                                        <Icon bSize={Size.small}>
                                            <FaIcon name="angle-down"/>
                                        </Icon>
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu>
                                    <DropdownContent>
                                        <DropdownItem>
                                            <p>The dropdown is <strong>left-aligned</strong> by default.</p>
                                        </DropdownItem>
                                    </DropdownContent>
                                </DropdownMenu>
                            </Dropdown>
                        </LevelItem>
                    </LevelLeft>
                    <LevelRight>
                        <LevelItem>
                            <Dropdown isActive={this.isRightActive} isRight>
                                <DropdownTrigger onClick={this.onClickRight}>
                                    <Button>
                                        <span>Right aligned</span>
                                        <Icon bSize={Size.small}>
                                            <FaIcon name="angle-down"/>
                                        </Icon>
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu>
                                    <DropdownContent>
                                        <DropdownItem>
                                            <p>Add the <code>is-right</code> modifier for a <strong>right-aligned</strong> dropdown.</p>
                                        </DropdownItem>
                                    </DropdownContent>
                                </DropdownMenu>
                            </Dropdown>
                        </LevelItem>
                    </LevelRight>
                </Level>
            </div>
        );
    }

    public onClick = (e: any) => {
        this.isActive = !this.isActive;
    }

    public onClickRight = (e: any) => {
        this.isRightActive = !this.isRightActive;
    }

}
