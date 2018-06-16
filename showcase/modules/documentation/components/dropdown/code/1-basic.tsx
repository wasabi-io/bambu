import * as React from "react";
import {Dropdown, DropdownContent, DropdownDivider, DropdownItem, DropdownMenu, DropdownTrigger} from "bambu/lib/components/dropdown";
import {Button} from "bambu/lib/elements/button";
import {FaIcon, Icon} from "bambu/lib/elements/icon";
import {observer} from "mobx-react";
import {observable} from "mobx";

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
                        <span>Dropdown button</span>
                        <Icon>
                            <FaIcon name="angle-down"/>
                        </Icon>
                    </Button>
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownContent>
                        <DropdownItem href="#">Dropdown item</DropdownItem>
                        <DropdownItem href="#">Other dropdown item</DropdownItem>
                        <DropdownItem href="#" isActive>Active dropdown item</DropdownItem>
                        <DropdownItem href="#">Other dropdown item</DropdownItem>
                        <DropdownDivider/>
                        <DropdownItem href="#"> With a divider</DropdownItem>
                    </DropdownContent>
                </DropdownMenu>
            </Dropdown>
        );
    }

    public onClick = (e: any) => {
        this.isActive = !this.isActive;
    }
}
