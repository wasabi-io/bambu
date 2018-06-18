import * as React from "react";
import {BreadCrumb, BreadCrumbItem} from "bambu/lib/components/breadcrumb";

export default class Index extends React.Component<{}, {}> {
    public render() {
        return (
            <BreadCrumb isCentered>
                <BreadCrumbItem href="#">Home</BreadCrumbItem>
                <BreadCrumbItem href="#">Documentation</BreadCrumbItem>
                <BreadCrumbItem href="#">Components</BreadCrumbItem>
                <BreadCrumbItem href="#" isActive={true}>Breadcrumb</BreadCrumbItem>
            </BreadCrumb>
        );
    }
}
