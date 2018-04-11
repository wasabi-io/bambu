import * as React from 'react';
import Stateful from 'wasabi-ui/lib/Stateful';
import {Color, Size} from 'bambu/lib/base/css';
import {
    Modal as ImageModal,
    ModalCard,
    ModalCardBody,
    ModalCardFooter,
    ModalCardHeader,
    ModalCardTitle,
} from 'bambu/lib/components/modal';
import {Button} from 'bambu/lib/elements/button';
import {Delete} from 'bambu/lib/elements/delete';
import {Image, ImageSize} from 'bambu/lib/elements/image';

import Page from '../Page';
import Snippet from '../../components/snippet';

export default class Modal extends Stateful<{}, { activeImageModal: boolean, activeCardModal: boolean }> {
    public constructor(props: any) {
        super(props);
        this.state = {
            activeImageModal: false,
            activeCardModal: false,
        }
    }

    public render(): JSX.Element {
        const toggleImageModal = () => this.setState({activeImageModal: !this.state.activeImageModal});
        const toggleCardModal = () => this.setState({activeCardModal: !this.state.activeCardModal});
        return (
            <Page
                title="Modal"
                subTitle="A classic modal overlay, in which you can include any content you want"
                hasMeta
                variables
            >
                <h3><b> Image Modal </b></h3>
                <p>Because a modal can contain <strong>anything you want</strong>, you can very simply use it to build an image gallery for example:</p>
                <Snippet borderless>
                    <Button
                        color={Color.primary}
                        size={Size.large}
                        onClick={toggleImageModal}
                    >
                        Launch image modal
                    </Button>
                    <ImageModal
                        isActive={this.state.activeImageModal}
                        onCloseButtonClick={toggleImageModal}
                    >
                        <Image src="https://bulma.io/images/placeholders/1280x960.png" alt=""/>
                    </ImageModal>
                </Snippet>
                <hr/>
                <h3><b> Modal Card </b></h3>
                <p>If you want a more classic modal, with a <strong>head</strong>, a <strong>body</strong> and a <strong>foot</strong>, use the <code>ModalCard</code>.</p>
                <Snippet borderless>
                    <Button
                        color={Color.primary}
                        size={Size.large}
                        onClick={toggleCardModal}
                    >
                        Launch modal card
                    </Button>
                    <ModalCard
                        isActive={this.state.activeCardModal}
                    >
                        <ModalCardHeader>
                            <ModalCardTitle>Modal title</ModalCardTitle>
                            <Delete onClick={toggleCardModal}/>
                        </ModalCardHeader>
                        <ModalCardBody>
                            <div>
                                <h1>Hello World</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio,
                                    sollicitudin vel erat vel, interdum mattis neque.</p>
                                <h2>Second level</h2>
                                <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam
                                    mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
                                <ul>
                                    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                                    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                                    <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                                    <li>Ut non enim metus.</li>
                                </ul>
                                <h3>Third level</h3>
                                <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
                                <ol>
                                    <li>Donec blandit a lorem id convallis.</li>
                                    <li>Cras gravida arcu at diam gravida gravida.</li>
                                    <li>Integer in volutpat libero.</li>
                                    <li>Donec a diam tellus.</li>
                                    <li>Aenean nec tortor orci.</li>
                                    <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
                                    <li>Vivamus maximus ultricies pulvinar.</li>
                                </ol>
                                <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
                                <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>
                                <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
                                <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
                                <h4>Fourth level</h4>
                                <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>
                                <p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>
                                <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper.
                                    Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan
                                    pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>
                                <h5>Fifth level</h5>
                                <p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend
                                    augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>
                                <h6>Sixth level</h6>
                                <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim
                                    vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>

                            </div>
                        </ModalCardBody>
                        <ModalCardFooter>
                            <Button color={Color.success} onClick={toggleCardModal}>Save changes</Button>
                            <Button onClick={toggleCardModal}>Cancel</Button>
                        </ModalCardFooter>
                    </ModalCard>
                </Snippet>
            </Page>
        );
    }
}
