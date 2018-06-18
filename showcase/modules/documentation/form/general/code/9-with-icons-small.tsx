import * as React from "react";
import {Control, ControlLabel, Field, Input} from "bambu/lib/form";
import {FaIcon, Icon} from "bambu/lib/elements/icon";
import {Size} from "bambu";

export default class GeneralControlHasIconSmall extends React.Component<{}, {}> {
    public render() {
        return (
            <Field>
                <ControlLabel bSize={Size.small}>Small Input</ControlLabel>
                <Control hasIconsLeft hasIconsRight>
                    <Input bSize={Size.small} type="email" placeholder="Normal"/>
                    <Icon bSize={Size.small} isLeft>
                        <FaIcon name="envelope"/>
                    </Icon>
                    <Icon bSize={Size.small} isRight>
                        <FaIcon name="check"/>
                    </Icon>
                </Control>
            </Field>
        );
    }
}
