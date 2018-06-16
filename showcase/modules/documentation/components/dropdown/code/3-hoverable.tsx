import * as React from "react";
import {Dropdown, DropdownContent, DropdownDivider, DropdownItem, DropdownMenu, DropdownTrigger} from "bambu/lib/components/dropdown";
import {Button} from "bambu/lib/elements/button";
import {FaIcon, Icon} from "bambu/lib/elements/icon";
import {observer} from "mobx-react";
import {observable} from "mobx";
import {Size} from "bambu";

@observer
export default class Index extends React.Component<{}, {}> {
    @observable
    private isActive: boolean = false;

    public constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Dropdown isActive={this.isActive}>
                    <DropdownTrigger onClick={this.onClick}>
                        <Button>
                            <span>Click me</span>
                            <Icon bSize={Size.small}>
                                <FaIcon name="angle-down"/>
                            </Icon>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownContent>
                            <DropdownItem href="#">Overview</DropdownItem>
                            <DropdownItem href="#">Modifiers</DropdownItem>
                            <DropdownItem href="#">Grid</DropdownItem>
                            <DropdownItem href="#">Form</DropdownItem>
                            <DropdownItem href="#">Elements</DropdownItem>
                            <DropdownItem href="#">Components</DropdownItem>
                            <DropdownItem href="#">Layout</DropdownItem>
                            <DropdownDivider/>
                            <DropdownItem href="#">More</DropdownItem>
                        </DropdownContent>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown isHoverable>
                    <DropdownTrigger>
                        <Button>
                            <span>Hover me</span>
                            <Icon bSize={Size.small}>
                                <FaIcon name="angle-down"/>
                            </Icon>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownContent>
                            <DropdownItem>
                                <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                            </DropdownItem>
                        </DropdownContent>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }

    public onClick = (e: any) => {
        this.isActive = !this.isActive;
    }

}
