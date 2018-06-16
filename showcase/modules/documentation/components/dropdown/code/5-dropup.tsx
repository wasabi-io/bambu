import * as React from "react";
import {Dropdown, DropdownContent, DropdownItem, DropdownMenu, DropdownTrigger} from "bambu/lib/components/dropdown";
import {Button} from "bambu/lib/elements/button";
import {FaIcon, Icon} from "bambu/lib/elements/icon";
import {observer} from "mobx-react";
import {observable} from "mobx";

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
            <Dropdown isActive={this.isActive} isUp>
                <DropdownTrigger onClick={this.onClick}>
                    <Button>
                        <span>Dropup button</span>
                        <Icon>
                            <FaIcon name="angle-up"/>
                        </Icon>
                    </Button>
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownContent>
                        <DropdownItem>
                            <p>You can add the <code>is-up</code> modifier to have a dropdown menu that appears above the dropdown button.</p>
                        </DropdownItem>
                    </DropdownContent>
                </DropdownMenu>
            </Dropdown>
        );
    }

    public onClick = (e: any) => {
        this.isActive = !this.isActive;
    }

    public onClickRight = (e: any) => {
        this.isRightActive = !this.isRightActive;
    }

}
