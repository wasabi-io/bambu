import * as React from 'react';
import SCStore from "./SCStore";
import {observer} from "mobx-react";

export interface DynamicComponentProps {
    store: SCStore;
}

@observer
export default class DynamicComponent extends React.Component<DynamicComponentProps> {
    public constructor(props: DynamicComponentProps) {
        super(props);
    }

    public render() {
        const {Component} = this.props.store;
        return (
            <div> {Component ? <Component/> : null} </div>
        );
    }
}
