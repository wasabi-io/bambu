import * as React from "react";
import {render} from "react-dom";
import Router from "./Router";

export interface ApplicationProps {
    mountId: string;
    workspace: string;
    api: string;
}

export default class Application {
    private props: ApplicationProps;

    public constructor(props: ApplicationProps) {
        this.props = props;
    }

    public render() {
        render(
            <Router/>,
            document.getElementById(this.props.mountId)
        );
    }
}