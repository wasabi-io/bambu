import * as React from "react";
import {Control, ControlLabel, Field, FieldBody, FieldHelp, FieldLabel, FieldLabelSize, Form, Input, Select, SelectItem, TextArea} from "bambu/lib/form";
import {Button} from "bambu/lib/elements/button";
import {Color, Size} from "bambu";
import {FaIcon, Icon} from "bambu/lib/elements/icon";
import Radio from "../../radio";

export default class GeneralFormHorizontal extends React.Component<{}, {}> {
    public render() {
        return (
            <Form>
                <Field isHorizontal>
                    <FieldLabel bSize={FieldLabelSize.normal}>
                        <ControlLabel>From</ControlLabel>
                    </FieldLabel>
                    <FieldBody>
                        <Field>
                            <Control isExpanded hasIconsLeft>
                                <Input placeholder="Name"/>
                                <Icon bSize={Size.small} isLeft>
                                    <FaIcon name="user"/>
                                </Icon>
                            </Control>
                        </Field>
                        <Field>
                            <Control isExpanded hasIconsLeft hasIconsRight>
                                <Input color={Color.success} type="email" placeholder="Email" value="alex@smith.com"/>
                                <Icon bSize={Size.small} isLeft>
                                    <FaIcon name="envelope"/>
                                </Icon>
                                <Icon bSize={Size.small} isRight>
                                    <FaIcon name="check"/>
                                </Icon>
                            </Control>
                        </Field>
                    </FieldBody>
                </Field>
                <Field isHorizontal>
                    <FieldLabel bSize={FieldLabelSize.normal}/>
                    <FieldBody>
                        <Field isExpanded>
                            <Field hasAddons>
                                <Control>
                                    <Button tagName="a" isStatic>+44</Button>
                                </Control>
                                <Control>
                                    <Input type="tel" placeholder="Your phone number"/>
                                </Control>
                            </Field>
                            <FieldHelp>Do not enter the first zero</FieldHelp>
                        </Field>
                    </FieldBody>
                </Field>
                <Field isHorizontal>
                    <FieldLabel bSize={FieldLabelSize.normal}>
                        <ControlLabel>Department</ControlLabel>
                    </FieldLabel>
                    <FieldBody>
                        <Field isNarrow>
                            <Control>
                                <Select isFullwidth>
                                    <SelectItem>Business development</SelectItem>
                                    <SelectItem>Marketing</SelectItem>
                                    <SelectItem>Sales</SelectItem>
                                </Select>
                            </Control>
                        </Field>
                    </FieldBody>
                </Field>
                <Field isHorizontal>
                    <FieldLabel bSize={FieldLabelSize.normal}>
                        <ControlLabel>Already a member?</ControlLabel>
                    </FieldLabel>
                    <FieldBody>
                        <Field isNarrow>
                            <Control>
                                <Radio name="member"> Yes </Radio>
                                <Radio name="member"> No </Radio>
                            </Control>
                        </Field>
                    </FieldBody>
                </Field>
                <Field isHorizontal>
                    <FieldLabel bSize={FieldLabelSize.normal}>
                        <ControlLabel>Subject</ControlLabel>
                    </FieldLabel>
                    <FieldBody>
                        <Field isNarrow>
                            <Control>
                                <Input color={Color.danger} placeholder="e.g. Partnership opportunity"/>
                                <Radio name="member"> No </Radio>
                            </Control>
                            <FieldHelp color={Color.danger}>This field is required</FieldHelp>
                        </Field>
                    </FieldBody>
                </Field>
                <Field isHorizontal>
                    <FieldLabel bSize={FieldLabelSize.normal}>
                        <ControlLabel>Question</ControlLabel>
                    </FieldLabel>
                    <FieldBody>
                        <Field isNarrow>
                            <Control>
                                <TextArea placeholder="Explain how we can help you"/>
                            </Control>
                        </Field>
                    </FieldBody>
                </Field>
                <Field isHorizontal>
                    <FieldLabel bSize={FieldLabelSize.normal}>

                    </FieldLabel>
                    <FieldBody>
                        <Field>
                            <Control>
                                <Button color={Color.primary}>Send message</Button>
                            </Control>
                        </Field>
                    </FieldBody>
                </Field>
            </Form>
        );
    }
}
