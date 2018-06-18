import * as React from "react";
import {Control, Field, Input} from "bambu/lib/form";
import {Color} from "bambu";
import {Button} from "bambu/lib/elements/button";

export default class GeneralFormAddons extends React.Component<{}, {}> {
    public render() {
        return (
            <Field hasAddons>
                <Control>
                    <Input placeholder="Find a repository"/>
                </Control>
                <Control>
                    <Button href="#" color={Color.info}>
                        Search
                    </Button>
                </Control>
            </Field>
        );
    }
}
