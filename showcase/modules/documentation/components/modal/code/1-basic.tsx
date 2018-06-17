import * as React from "react";
import {Modal} from "bambu/lib/components/modal";
import {Media, MediaContent, MediaLeft} from "bambu/lib/components/media";
import {Image, ImageSize} from "bambu/lib/elements/image";
import {Content} from "bambu/lib/elements/content";
import ModalContent from "bambu/lib/components/modal/ModalContent";
import {Box} from "bambu/lib/elements/box";
import {observer} from "mobx-react";
import {observable} from "mobx";
import {Button} from "bambu/lib/elements/button";
import {Color, Size} from "bambu";
import ModalClose from "bambu/lib/components/modal/ModalClose";

const ModalContentView: React.SFC<{}> = () => (
    <Media>
        <MediaLeft>
            <Image src="https://bulma.io/images/placeholders/128x128.png" alt="Image" bSize={ImageSize.is48X48}/>
        </MediaLeft>
        <MediaContent>
            <Content>
                <p>
                    <strong>John Smith</strong>
                    <small>@johnsmith</small>
                    <small>31m</small>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                </p>
            </Content>
        </MediaContent>
    </Media>
);

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
                        <Box>
                            <ModalContentView/>
                        </Box>
                    </ModalContent>
                </Modal>
            </div>
        );
    }

    public onClick = (e: any) => {
        this.isActive = !this.isActive;
    }
}
