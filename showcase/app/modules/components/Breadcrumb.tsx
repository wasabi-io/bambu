import * as React from 'react';
import Stateless from 'wasabi-ui/lib/Stateless';
import {BreadCrumb, BreadCrumbItem, BreadCrumbSeperator} from 'bambu/lib/components/breadcrumb';
import {Icon} from 'bambu/lib/elements/icon';
import {Alignment, Size} from 'bambu/lib/base/css';
import {Snippet} from '../../components';
import Page from '../Page';

export default class Breadcrumb extends Stateless<{}> {
    public render(): JSX.Element {
        return (
            <Page
                title="Breadcrumb"
                subTitle="A simple breadcrumb component to improve your navigation experience"
                hasMeta
                sizes
                variables
            >
                <Snippet>
                    <BreadCrumb>
                        <BreadCrumbItem>bambu</BreadCrumbItem>
                        <BreadCrumbItem>Documantation</BreadCrumbItem>
                        <BreadCrumbItem>Components</BreadCrumbItem>
                        <BreadCrumbItem isActive>Breadcrumb</BreadCrumbItem>
                    </BreadCrumb>
                </Snippet>
                <hr/>
                <h3><b><a>#</a> Aligment</b></h3>
                <span>For alternative alignments, use the isCentered and isRight modifiers on the Breadcrumb container.</span>
                <Snippet>
                    <BreadCrumb alignment={Alignment.center}>
                        <BreadCrumbItem>bambu</BreadCrumbItem>
                        <BreadCrumbItem>Documantation</BreadCrumbItem>
                        <BreadCrumbItem>Components</BreadCrumbItem>
                        <BreadCrumbItem isActive>Breadcrumb</BreadCrumbItem>
                    </BreadCrumb>
                </Snippet>
                <Snippet>
                    <BreadCrumb alignment={Alignment.right}>
                        <BreadCrumbItem>bambu</BreadCrumbItem>
                        <BreadCrumbItem>Documantation</BreadCrumbItem>
                        <BreadCrumbItem>Components</BreadCrumbItem>
                        <BreadCrumbItem isActive>Breadcrumb</BreadCrumbItem>
                    </BreadCrumb>
                </Snippet>
                <h3><b><a>#</a> Icons</b></h3>
                <span>You can use any of the Font Awesome icons.</span>
                <Snippet>
                    <BreadCrumb>
                        <BreadCrumbItem><Icon icon="home"/>bambu</BreadCrumbItem>
                        <BreadCrumbItem><Icon icon="book"/>Documantation</BreadCrumbItem>
                        <BreadCrumbItem><Icon icon="puzzle-piece"/>Components</BreadCrumbItem>
                        <BreadCrumbItem isActive><Icon icon="thumbs-up"/>Breadcrumb</BreadCrumbItem>
                    </BreadCrumb>
                </Snippet>
                <h3><b><a>#</a> Alternative separators</b></h3>
                <span>You can choose between 4 additional separators: hasArrowSeparator hasBulletSeparator hasDotSeparator and hasSucceedsSeparator.</span>
                <Snippet>
                    <BreadCrumb separator={BreadCrumbSeperator.arrow}>
                        <BreadCrumbItem><Icon icon="home"/>bambu</BreadCrumbItem>
                        <BreadCrumbItem><Icon icon="book"/>Documantation</BreadCrumbItem>
                        <BreadCrumbItem><Icon icon="puzzle-piece"/>Components</BreadCrumbItem>
                        <BreadCrumbItem isActive><Icon icon="thumbs-up"/>Breadcrumb</BreadCrumbItem>
                    </BreadCrumb>
                </Snippet>
                <Snippet>
                    <BreadCrumb separator={BreadCrumbSeperator.bullet}>
                        <BreadCrumbItem><Icon icon="home"/>bambu</BreadCrumbItem>
                        <BreadCrumbItem><Icon icon="book"/>Documantation</BreadCrumbItem>
                        <BreadCrumbItem><Icon icon="puzzle-piece"/>Components</BreadCrumbItem>
                        <BreadCrumbItem isActive><Icon icon="thumbs-up"/>Breadcrumb</BreadCrumbItem>
                    </BreadCrumb>
                </Snippet>
                <Snippet>
                    <BreadCrumb separator={BreadCrumbSeperator.dot}>
                        <BreadCrumbItem><Icon icon="home"/>bambu</BreadCrumbItem>
                        <BreadCrumbItem><Icon icon="book"/>Documantation</BreadCrumbItem>
                        <BreadCrumbItem><Icon icon="puzzle-piece"/>Components</BreadCrumbItem>
                        <BreadCrumbItem isActive><Icon icon="thumbs-up"/>Breadcrumb</BreadCrumbItem>
                    </BreadCrumb>
                </Snippet>
                <Snippet>
                    <BreadCrumb separator={BreadCrumbSeperator.succeeds}>
                        <BreadCrumbItem><Icon icon="home"/>bambu</BreadCrumbItem>
                        <BreadCrumbItem><Icon icon="book"/>Documantation</BreadCrumbItem>
                        <BreadCrumbItem><Icon icon="puzzle-piece"/>Components</BreadCrumbItem>
                        <BreadCrumbItem isActive><Icon icon="thumbs-up"/>Breadcrumb</BreadCrumbItem>
                    </BreadCrumb>
                </Snippet>
                <h3><b><a>#</a> Sizes</b></h3>
                <span>You can choose between 3 additional sizes: isSmall isMedium and isLarge.</span>
                <Snippet>
                    <BreadCrumb bSize={Size.small}>
                        <BreadCrumbItem><Icon icon="home"/>bambu</BreadCrumbItem>
                        <BreadCrumbItem><Icon icon="book"/>Documantation</BreadCrumbItem>
                        <BreadCrumbItem><Icon icon="puzzle-piece"/>Components</BreadCrumbItem>
                        <BreadCrumbItem isActive><Icon icon="thumbs-up"/>Breadcrumb</BreadCrumbItem>
                    </BreadCrumb>
                </Snippet>
                <Snippet>
                    <BreadCrumb bSize={Size.medium}>
                        <BreadCrumbItem><Icon icon="home"/>bambu</BreadCrumbItem>
                        <BreadCrumbItem><Icon icon="book"/>Documantation</BreadCrumbItem>
                        <BreadCrumbItem><Icon icon="puzzle-piece"/>Components</BreadCrumbItem>
                        <BreadCrumbItem isActive><Icon icon="thumbs-up"/>Breadcrumb</BreadCrumbItem>
                    </BreadCrumb>
                </Snippet>
                <Snippet>
                    <BreadCrumb bSize={Size.large}>
                        <BreadCrumbItem><Icon icon="home"/>bambu</BreadCrumbItem>
                        <BreadCrumbItem><Icon icon="book"/>Documantation</BreadCrumbItem>
                        <BreadCrumbItem><Icon icon="puzzle-piece"/>Components</BreadCrumbItem>
                        <BreadCrumbItem isActive><Icon icon="thumbs-up"/>Breadcrumb</BreadCrumbItem>
                    </BreadCrumb>
                </Snippet>
            </Page>
        );
    }
}
