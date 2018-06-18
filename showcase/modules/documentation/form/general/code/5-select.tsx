import * as React from "react";
import {Control, Select, SelectItem} from "bambu/lib/form";

export default class GeneralSelect extends React.Component<{}, {}> {
    public render() {
        return (
            <Control>
                <Select>
                    <SelectItem>Select dropdown</SelectItem>
                    <SelectItem>With options</SelectItem>
                </Select>
            </Control>
        );
    }
}
