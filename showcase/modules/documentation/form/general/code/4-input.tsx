import * as React from "react";
import {Control, Input} from "bambu/lib/form";

export default class GeneralInput extends React.Component<{}, {}> {
    public render() {
        return (
            <Control>
                <Input placeholder="Text input"/>
            </Control>
        );
    }
}
