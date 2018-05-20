import * as React from "react";
import Stateless from "wasabi-ui/lib/Stateless";
import {withRouter} from "react-router-dom";
import NavBar from "./NavBar";

class Workspace extends Stateless<any> {
    public render() {
        return (
            <div>
                <NavBar basePath={this.getUrl()}/>
                {this.props.children}
            </div>
        );
    }

    public getUrl(): string {
        return (window as any).basePath;
    }
}

const WorkspaceWithRouter = withRouter(Workspace);

export default WorkspaceWithRouter;


