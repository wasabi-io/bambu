import * as React from "react";
import {observable, toJS} from "mobx";
import {observer} from "mobx-react";
import Stateless from "component/Stateless";
import Loading from "../layout/loading/Loading";
import MessageView from "../layout/message/MessageView";

export interface AsyncComponentProps {
    getComponent: () => Promise<JSX.Element>;
}

@observer
export default class AsyncComponent extends Stateless<AsyncComponentProps> {
    @observable
    private component: JSX.Element | Error;

    public render() {
        if (!this.component) {
            return <Loading/>;
        }
        if (this.component instanceof Error) {
            return (
                <MessageView>
                    {this.component.message}
                </MessageView>
            );
        }
        return toJS(this.component);
    }

    public componentDidMount() {
        this.loadComponent();
    }

    public loadComponent() {
        this.props.getComponent().then((component: JSX.Element) => {
            if (this.component !== component) {
                this.component = component;
            }
        }).catch((error: Error) => {
            this.component = error;
        });
    }
}
