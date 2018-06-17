import * as ReactDOMServer from "react-dom/server";
import * as React from "react";
import {Stateless} from "wasabi-ui";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import {has} from "wasabi-common";
import {Message, MessageBody} from "bambu/lib/components/message/index";
import {Color, HTMLDivProps} from "bambu";
import previewStyle from "./previewStyle";

export interface PreviewStoreProps {
    phase?: "Initial" | "Transform" | "Execute";
    Component: any;
    success: boolean;
}

export class PreviewStore {
    @observable
    private _phase?: "Initial" | "Transform" | "Execute";
    @observable
    private _Component: any;
    @observable
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

    @action
    public setResult(result: PreviewStoreProps) {
        this._Component = result.Component;
        this._success = has(result.success) ? result.success : true;
        this._phase = result.phase;
    }
}

export interface PreviewOptionalProps extends HTMLDivProps {

}

export interface PreviewProps extends PreviewOptionalProps {
    store: PreviewStore;
}

@observer
export default class Preview extends Stateless<PreviewProps> {
    private component: any;

    public render() {
        const {store, ...props} = this.props;
        const {Component, phase, success} = store;

        if (success) {
            if (store.phase === "Initial") {
                this.component = <div>Loading...</div>;
            } else {
                try {
                    this.component = <Component/>;
                } catch (e) {
                    this.component = Preview.createErrorComponent(e.message);
                }
            }
        } else {
            this.component = Preview.createErrorComponent(Component.message);
        }
        return (
            <div className={previewStyle.cePreview} id={this.id} {...props} />
        );
    }

    public componentDidMount() {
        this.tryToRenderComponent();
    }

    public componentDidUpdate() {
        this.tryToRenderComponent();
    }

    public tryToRenderComponent() {
        try {
            this.renderComponent();
        } catch (e) {
            this.component = Preview.createErrorComponent(e.message);
            this.renderComponent();
        }
    }

    public renderComponent() {
        document.getElementById(this.id).innerHTML = ReactDOMServer.renderToString(this.component);
    }

    public static createErrorComponent(data: string) {
        return (
            <Message color={Color.danger}>
                <MessageBody>
                    {data}
                </MessageBody>
            </Message>
        );
    }
}
