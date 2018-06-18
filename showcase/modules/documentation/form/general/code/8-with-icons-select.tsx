import * as React from "react";
import {Control, Field, Select, SelectItem} from "bambu/lib/form";
import {FaIcon, Icon} from "bambu/lib/elements/icon";
import {Size} from "bambu";

export default class GeneralControlHasIconOnSelect extends React.Component<{}, {}> {
    public render() {
        return (
            <Field>
                <Control hasIconsLeft>
                    <Select>
                        <SelectItem selected>Country</SelectItem>
                        <SelectItem>Select dropdown</SelectItem>
                        <SelectItem>With options</SelectItem>
                    </Select>
                    <Icon bSize={Size.small} isLeft>
                        <FaIcon name="globe"/>
                    </Icon>
                </Control>
            </Field>
        );
    }
}
