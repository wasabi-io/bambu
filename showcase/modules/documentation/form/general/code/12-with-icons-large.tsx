import * as React from "react";
import {Control, ControlLabel, Field, Form, Input} from "bambu/lib/form";
import {FaIcon, FaIconSize, Icon} from "bambu/lib/elements/icon";
import {Size} from "bambu";

export default class GeneralControlHasIconLarge extends React.Component<{}, {}> {
    public render() {
        return (
            <Form>
                <Field>
                    <ControlLabel bSize={Size.large}>Large input</ControlLabel>
                    <Control hasIconsLeft hasIconsRight>
                        <Input bSize={Size.large} type="email" placeholder="Extra small"/>
                        <Icon bSize={Size.small} isLeft>
                            <FaIcon bSize={FaIconSize.isXs} name="envelope"/>
                        </Icon>
                        <Icon bSize={Size.small} isRight>
                            <FaIcon bSize={FaIconSize.isXs} name="check"/>
                        </Icon>
                    </Control>
                </Field>
                <Field>
                    <Control hasIconsLeft hasIconsRight>
                        <Input bSize={Size.large} type="email" placeholder="Small"/>
                        <Icon isLeft>
                            <FaIcon bSize={FaIconSize.isSm} name="envelope"/>
                        </Icon>
                        <Icon isRight>
                            <FaIcon bSize={FaIconSize.isSm} name="check"/>
                        </Icon>
                    </Control>
                </Field>
                <Field>
                    <Control hasIconsLeft hasIconsRight>
                        <Input bSize={Size.large} type="email" placeholder="Normal"/>
                        <Icon isLeft>
                            <FaIcon name="envelope"/>
                        </Icon>
                        <Icon isRight>
                            <FaIcon name="check"/>
                        </Icon>
                    </Control>
                </Field>
                <Field>
                    <Control hasIconsLeft hasIconsRight>
                        <Input bSize={Size.large} type="email" placeholder="Large"/>
                        <Icon bSize={Size.medium} isLeft>
                            <FaIcon bSize={FaIconSize.isLg} name="envelope"/>
                        </Icon>
                        <Icon bSize={Size.medium} isRight>
                            <FaIcon bSize={FaIconSize.isLg} name="check"/>
                        </Icon>
                    </Control>
                </Field>
            </Form>
        );
    }
}
