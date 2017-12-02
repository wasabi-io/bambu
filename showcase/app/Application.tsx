import * as React from "react";
import { render } from "react-dom";
import "./index.scss";
import Workspace from "./Workspace";

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
            <Workspace />,
            document.getElementById(this.props.mountId)
        );
    }
}
