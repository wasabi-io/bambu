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
    private isActive: boolean = true;

    public constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <Dropdown isActive={this.isActive}>
                <DropdownTrigger onClick={this.onClick}>
                    <Button>
                        <span>Content</span>
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
                        <DropdownDivider/>
                        <DropdownItem>
                            <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
                        </DropdownItem>
                        <DropdownItem href="#"> This is a link</DropdownItem>
                    </DropdownContent>
                </DropdownMenu>
            </Dropdown>
        );
    }

    public onClick = (e: any) => {
        this.isActive = !this.isActive;
    }
}
