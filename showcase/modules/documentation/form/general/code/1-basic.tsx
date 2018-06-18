import * as React from "react";
import {CheckBox, Control, ControlLabel, Field, FieldHelp, Form, Input, Radio, Select, SelectItem, TextArea,} from "bambu/lib/form";
import {Color, Size} from "bambu";
import {FaIcon, Icon} from "bambu/lib/elements/icon";
import {Button} from "bambu/lib/elements/button";

export default class GeneralBasic extends React.Component<{}, {}> {
    public render() {
        return (
            <Form>
                <Field>
                    <ControlLabel>Name</ControlLabel>
                    <Control>
                        <Input placeholder="Text input"/>
                    </Control>
                </Field>
                <Field>
                    <ControlLabel>Username</ControlLabel>
                    <Control hasIconsLeft hasIconsRight>
                        <Input color={Color.success} placeholder="Text input" value="bambu"/>
                        <Icon bSize={Size.small} isLeft>
                            <FaIcon name="user"/>
                        </Icon>
                        <Icon bSize={Size.small} isRight>
                            <FaIcon name="check"/>
                        </Icon>
                    </Control>
                    <FieldHelp color={Color.success}>This username is available</FieldHelp>
                </Field>
                <Field>
                    <ControlLabel>Email</ControlLabel>
                    <Control hasIconsLeft hasIconsRight>
                        <Input color={Color.danger} type="email" placeholder="Email input" value="hello@"/>
                        <Icon bSize={Size.small} isLeft>
                            <FaIcon name="envelope"/>
                        </Icon>
                        <Icon bSize={Size.small} isRight>
                            <FaIcon name="exclamation-triangle"/>
                        </Icon>
                    </Control>
                    <FieldHelp color={Color.success}>This email is invalid</FieldHelp>
                </Field>
                <Field>
                    <ControlLabel>Subject</ControlLabel>
                    <Control>
                        <Select>
                            <SelectItem>Select dropdown</SelectItem>
                            <SelectItem>With options</SelectItem>
                        </Select>
                    </Control>
                </Field>
                <Field>
                    <ControlLabel>Message</ControlLabel>
                    <Control>
                        <TextArea placeholder="Textarea"/>
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <CheckBox> I agree to the <a href="#">terms and conditions</a> </CheckBox>
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Radio name="question"> Yes </Radio> <Radio name="question"> No </Radio>
                    </Control>
                </Field>
                <Field isGrouped>
                    <Control>
                        <Button isLink>Submit</Button>
                    </Control>
                    <Control>
                        <Button isText>Cancel</Button>
                    </Control>
                </Field>
            </Form>
        );
    }
}
