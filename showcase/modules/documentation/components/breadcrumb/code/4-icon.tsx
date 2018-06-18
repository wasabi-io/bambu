import * as React from "react";
import {BreadCrumb, BreadCrumbItem} from "bambu/lib/components/breadcrumb";
import {FaIcon, Icon} from "bambu/lib/elements/icon";
import {Size} from "bambu";

export default class Index extends React.Component<{}, {}> {
    public render() {
        return (
            <BreadCrumb>
                <BreadCrumbItem href="#">
                    <Icon bSize={Size.small}><FaIcon name="home" ariaHidden/></Icon>
                    <span>Home</span>
                </BreadCrumbItem>
                <BreadCrumbItem href="#">
                    <Icon bSize={Size.small}><FaIcon name="book" ariaHidden/></Icon>
                    <span>Documentation</span>
                </BreadCrumbItem>
                <BreadCrumbItem href="#">
                    <Icon bSize={Size.small}><FaIcon name="puzzle-piece" ariaHidden/></Icon>
                    <span>Components</span>
                </BreadCrumbItem>
                <BreadCrumbItem href="#" isActive>
                    <Icon bSize={Size.small}><FaIcon name="thumbs-up" ariaHidden/></Icon>
                    <span>Breadcrumb</span>
                </BreadCrumbItem>
            </BreadCrumb>
        );
    }
}
