import * as React from "react";
import {Control, ControlLabel, Field, Form, Input} from "bambu/lib/form";

export default class GeneralFieldSpaces extends React.Component<{}, {}> {
    public render() {
        return (
            <Form>
                <Field>
                    <ControlLabel>Name</ControlLabel>
                    <Control>
                        <Input placeholder="e.g Alex Smith"/>
                    </Control>
                </Field>
                <Field>
                    <ControlLabel>Email</ControlLabel>
                    <Control>
                        <Input type="email" placeholder="e.g. alexsmith@gmail.com"/>
                    </Control>
                </Field>
            </Form>
        );
    }
}
