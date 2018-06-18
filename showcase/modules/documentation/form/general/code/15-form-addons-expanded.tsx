import * as React from "react";
import {Control, Field} from "bambu/lib/form";
import {Button} from "bambu/lib/elements/button";
import Select from "bambu/lib/form/input/select/Select";
import SelectItem from "bambu/lib/form/input/select/SelectItem";
import {Color} from "bambu";

export default class GeneralFormAddonsExpanded extends React.Component<{}, {}> {
    public render() {
        return (
            <Field hasAddons>
                <Control isExpanded>
                    <Select isFullwidth>
                        <SelectItem value="Argentina">Argentina</SelectItem>
                        <SelectItem value="Bolivia">Bolivia</SelectItem>
                        <SelectItem value="Brazil">Brazil</SelectItem>
                        <SelectItem value="Chile">Chile</SelectItem>
                        <SelectItem value="Colombia">Colombia</SelectItem>
                        <SelectItem value="Ecuador">Ecuador</SelectItem>
                        <SelectItem value="Guyana">Guyana</SelectItem>
                        <SelectItem value="Paraguay">Paraguay</SelectItem>
                        <SelectItem value="Peru">Peru</SelectItem>
                        <SelectItem value="Suriname">Suriname</SelectItem>
                        <SelectItem value="Uruguay">Uruguay</SelectItem>
                        <SelectItem value="Venezuela">Venezuela</SelectItem>
                    </Select>
                </Control>
                <Control>
                    <Button color={Color.primary}>Choose</Button>
                </Control>
            </Field>
        );
    }
}
