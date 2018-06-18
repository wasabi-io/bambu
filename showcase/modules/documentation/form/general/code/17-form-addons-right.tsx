import * as React from "react";
import {Control, Field, Input} from "bambu/lib/form";
import {Button} from "bambu/lib/elements/button";
import Select from "bambu/lib/form/input/select/Select";
import SelectItem from "bambu/lib/form/input/select/SelectItem";
import {Color} from "bambu";

export default class GeneralFormAddonsRight extends React.Component<{}, {}> {
    public render() {
        return (
            <Field hasAddons hasAddonsRight>
                <Control>
                    <Select>
                        <SelectItem>$</SelectItem>
                        <SelectItem>£</SelectItem>
                        <SelectItem>€</SelectItem>
                    </Select>
                </Control>
                <Control>
                    <Input placeholder="Amount of money"/>
                </Control>
                <Control>
                    <Button color={Color.primary}>Transfer</Button>
                </Control>
            </Field>
        );
    }
}
