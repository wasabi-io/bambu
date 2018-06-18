import * as React from "react";
import {Control, ControlLabel, Field, FieldHelp, Input} from "bambu/lib/form";
import {Color} from "bambu";

export default class GeneralField extends React.Component<{}, {}> {
    public render() {
        return (
            <Field>
                <ControlLabel>Label</ControlLabel>
                <Control>
                    <Input placeholder="Text input"/>
                </Control>
                <FieldHelp color={Color.success}>This is a help text</FieldHelp>
            </Field>
        );
    }
}
