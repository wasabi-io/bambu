import * as React from "react";
import * as ReactDOMServer from 'react-dom/server';
import {Stateless} from "wasabi-ui";
import {observable} from "mobx";
import {observer} from "mobx-react";
import {has} from "wasabi-common";
import {Message, MessageBody} from "bambu/lib/components/message";
import {Color} from "bambu";

export interface PreviewStoreProps {
    phase?: "Transform" | "Execute";
    Component: any;
    success: boolean;
}

export class PreviewStore {
    private _phase?: "Transform" | "Execute";
    @observable private _Component: any;
    private _success: boolean;

    public constructor(props: PreviewStoreProps) {
        this.setResult(props);
    }

    public get success(): boolean {
        return this._success;
    }

    public setSuccess(value: boolean) {
        this._success = value;
    }

    public get phase() {
        return this._phase;
    }

    public setPhase(value: any) {
        this._phase = value;
    }

    public get Component(): any {
        return this._Component;
    }

    public setData(value: any) {
        this._Component = value;
    }

    public setResult(result: PreviewStoreProps) {
        this._Component = result.Component;
        this._success = has(result.success) ? result.success : true;
        this._phase = result.phase;
    }
}

export interface PreviewProps {
    store: PreviewStore;
}

@observer
export default class Preview extends Stateless<PreviewProps> {
    private component: any;

    public render() {
        const {
            Component,
            phase,
            success
        } = this.props.store;

        if (success) {
            try {
                this.component = <Component/>;
            } catch (e) {
                this.component = this.renderErrorMessage(e.messsage);
            }
        } else {
            this.component = this.renderErrorMessage(Component.message);
        }
        return (
            <div id={this.id} style={{ padding: "10px", width: "100%" }} />
        );
    }

    public componentDidMount() {
        this.renderComponent();
    }

    public componentDidUpdate() {
        this.renderComponent();
    }

    private renderComponent() {
        try {
            document.getElementById(this.id).innerHTML = ReactDOMServer.renderToString(this.component);
        }catch (e) {
            console.log(e);
            document.getElementById(this.id).innerHTML = ReactDOMServer.renderToString(this.renderErrorMessage(e.message));
        }
    }

    public renderErrorMessage(data: string) {
        return (
            <Message color={Color.danger}>
                <MessageBody>
                    {data}
                </MessageBody>
            </Message>
        );
    }
}
