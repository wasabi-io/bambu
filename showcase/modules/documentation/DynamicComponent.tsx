import * as React from 'react';
import SCStore from "./SCStore";
import {observer} from "mobx-react";
import {Box} from "bambu/lib/elements/box";

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
        if (!Component) {
            return null;
        }
        return (
            <Box style={{margin: 0, padding: 50, marginTop: 10}}>
                <Component/>
            </Box>
        );
    }
}
