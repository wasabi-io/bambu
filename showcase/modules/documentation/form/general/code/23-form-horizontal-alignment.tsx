import * as React from "react";
import {Control, ControlLabel, Field, FieldBody, FieldLabel, FieldLabelSize, Form, Input} from "bambu/lib/form";
import {Size} from "bambu";
import CheckBox from "../../checkbox";

export default class GeneralFormHorizontal extends React.Component<{}, {}> {
    public render() {
        return (
            <Form>
                <Field isHorizontal>
                    <FieldLabel>
                        <ControlLabel>No padding</ControlLabel>
                    </FieldLabel>
                    <FieldBody>
                        <Field>
                            <Control>
                                <CheckBox> Checkbox </CheckBox>
                            </Control>
                        </Field>
                    </FieldBody>
                </Field>
                <Field isHorizontal>
                    <FieldLabel bSize={FieldLabelSize.small}>
                        <ControlLabel>Small padding</ControlLabel>
                    </FieldLabel>
                    <FieldBody>
                        <Field>
                            <Control>
                                <Input bSize={Size.small} placeholder="Small sized input"/>
                            </Control>
                        </Field>
                    </FieldBody>
                </Field>
                <Field isHorizontal>
                    <FieldLabel bSize={FieldLabelSize.normal}>
                        <ControlLabel>Normal label</ControlLabel>
                    </FieldLabel>
                    <FieldBody>
                        <Field>
                            <Control>
                                <Input placeholder="Normal sized input"/>
                            </Control>
                        </Field>
                    </FieldBody>
                </Field>
                <Field isHorizontal>
                    <FieldLabel bSize={FieldLabelSize.medium}>
                        <ControlLabel>Medium label</ControlLabel>
                    </FieldLabel>
                    <FieldBody>
                        <Field>
                            <Control>
                                <Input bSize={Size.medium} placeholder="Medium sized input"/>
                            </Control>
                        </Field>
                    </FieldBody>
                </Field>
                <Field isHorizontal>
                    <FieldLabel bSize={FieldLabelSize.large}>
                        <ControlLabel>Large label</ControlLabel>
                    </FieldLabel>
                    <FieldBody>
                        <Field>
                            <Control>
                                <Input bSize={Size.large} placeholder="Large sized input"/>
                            </Control>
                        </Field>
                    </FieldBody>
                </Field>
            </Form>
        );
    }
}
