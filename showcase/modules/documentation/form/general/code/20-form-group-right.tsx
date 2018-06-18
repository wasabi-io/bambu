import * as React from "react";
import {Control, Field} from "bambu/lib/form";
import {Button} from "bambu/lib/elements/button";
import {Color} from "bambu";

export default class GeneralFormGroupRight extends React.Component<{}, {}> {
    public render() {
        return (
            <Field isGrouped isGroupedRight>
                <Control>
                    <Button href="#" color={Color.primary}>Submit</Button>
                </Control>
                <Control>
                    <Button href="#" color={Color.light}>Cancel</Button>
                </Control>
            </Field>
        );
    }
}
