import * as React from "react";
import {ModalCard, ModalCardBody, ModalCardFooter, ModalCardHeader, ModalCardTitle} from "bambu/lib/components/modal";
import {Delete} from "bambu/lib/elements/delete";
import {observer} from "mobx-react";
import {observable} from "mobx";
import {Color, Size} from "bambu";
import {Button} from "bambu/lib/elements/button";

@observer
export default class Index extends React.Component <{}, {}> {
    @observable
    private isActive: boolean = false;

    public render() {
        return (
            <div>
                <Button bSize={Size.large} color={Color.primary} onClick={this.onClick}>Launch example modal</Button>
                <ModalCard isActive={this.isActive}>
                    <ModalCardHeader>
                        <ModalCardTitle>Modal title</ModalCardTitle>
                        <Delete onClick={this.onClick}/>
                    </ModalCardHeader>
                    <ModalCardBody>
                        Modal Card Content
                    </ModalCardBody>
                    <ModalCardFooter>
                        <Button color={Color.success}>Save Changes</Button>
                        <Button onClick={this.onClick} color={Color.warning}>Cancel</Button>
                    </ModalCardFooter>
                </ModalCard>
            </div>
        );
    }

    public onClick = (e: any) => {
        this.isActive = !this.isActive;
    }
}
