import * as React from "react";
import {Control, Field, Form, Input} from "bambu/lib/form";
import {Color, Size} from "bambu";
import {FaIcon, Icon} from "bambu/lib/elements/icon";
import Button from "bambu/lib/elements/button/Button";

export default class GeneralControlHasIcon extends React.Component<{}, {}> {
    public render() {
        return (
            <Form>
                <Field>
                    <Control hasIconsLeft hasIconsRight>
                        <Input type="email" placeholder="Email"/>
                        <Icon bSize={Size.small} isLeft>
                            <FaIcon name="envelope"/>
                        </Icon>
                        <Icon bSize={Size.small} isRight>
                            <FaIcon name="check"/>
                        </Icon>
                    </Control>
                </Field>
                <Field>
                    <Control hasIconsLeft hasIconsRight>
                        <Input type="password" placeholder="Password"/>
                        <Icon bSize={Size.small} isLeft>
                            <FaIcon name="lock"/>
                        </Icon>
                    </Control>
                </Field>
                <Field isGrouped>
                    <Control>
                        <Button color={Color.success}>Login</Button>
                    </Control>
                </Field>
            </Form>
        );
    }
}
