import * as React from "react";
import {Control, ControlLabel, Field, Form, Input} from "bambu/lib/form";
import {FaIcon, FaIconSize, Icon} from "bambu/lib/elements/icon";
import {Size} from "bambu";

export default class GeneralControlHasIconNormal extends React.Component<{}, {}> {
    public render() {
        return (
            <Form>
                <Field>
                    <ControlLabel>Normal input</ControlLabel>
                    <Control hasIconsLeft hasIconsRight>
                        <Input type="email" placeholder="Extra small"/>
                        <Icon bSize={Size.small} isLeft>
                            <FaIcon bSize={FaIconSize.isXs} name="envelope"/>
                        </Icon>
                        <Icon bSize={Size.small} isRight>
                            <FaIcon bSize={FaIconSize.isXs} name="check"/>
                        </Icon>
                    </Control>
                </Field>
                <Field>
                    <ControlLabel>Normal input</ControlLabel>
                    <Control hasIconsLeft hasIconsRight>
                        <Input type="email" placeholder="Normal"/>
                        <Icon isLeft>
                            <FaIcon name="envelope"/>
                        </Icon>
                        <Icon isRight>
                            <FaIcon name="check"/>
                        </Icon>
                    </Control>
                </Field>
            </Form>
        );
    }
}
