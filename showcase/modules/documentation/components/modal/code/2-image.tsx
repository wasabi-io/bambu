import * as React from "react";
import {Modal} from "bambu/lib/components/modal";
import ModalContent from "bambu/lib/components/modal/ModalContent";
import {observer} from "mobx-react";
import {observable} from "mobx";
import {Button} from "bambu/lib/elements/button";
import {bulma, Color, Size} from "bambu";
import ModalClose from "bambu/lib/components/modal/ModalClose";
import {Image} from "bambu/lib/elements/image";

@observer
export default class Index extends React.Component <{}, {}> {
    @observable
    private isActive: boolean = false;

    public render() {
        return (
            <div>
                <Button bSize={Size.large} color={Color.primary} onClick={this.onClick}>Launch example modal</Button>
                <Modal isActive={this.isActive} onBackgroundClick={this.onClick} close={
                    <ModalClose bSize={Size.large} onClick={this.onClick}/>
                }>
                    <ModalContent>
                        <Image className={bulma.is4by3} src="https://bulma.io/images/placeholders/1280x960.png" alt="Image"/>
                    </ModalContent>
                </Modal>
            </div>
        );
    }

    public onClick = (e: any) => {
        this.isActive = !this.isActive;
    }
}
