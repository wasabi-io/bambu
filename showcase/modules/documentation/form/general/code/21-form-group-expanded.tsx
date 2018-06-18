import * as React from "react";
import {Control, Field, Input} from "bambu/lib/form";
import {Button} from "bambu/lib/elements/button";
import {Color} from "bambu";

export default class GeneralFormGroupExpanded extends React.Component<{}, {}> {
    public render() {
        return (
            <Field isGrouped>
                <Control isExpanded>
                    <Input placeholder="Find a repository"/>
                </Control>
                <Control>
                    <Button href="#" color={Color.info}>Search</Button>
                </Control>
            </Field>
        );
    }
}
