import * as React from "react";
import {Control, Field} from "bambu/lib/form";
import {Button} from "bambu/lib/elements/button";

export default class GeneralFormGroupExpanded extends React.Component<{}, {}> {
    public render() {
        return (
            <Field isGrouped isGroupedMultiline>
                <Control>
                    <Button href="#">One</Button>
                </Control>
                <Control>
                    <Button href="#">Two</Button>
                </Control>
                <Control>
                    <Button href="#">Three</Button>
                </Control>
                <Control>
                    <Button href="#">Four</Button>
                </Control>
                <Control>
                    <Button href="#">Five</Button>
                </Control>
                <Control>
                    <Button href="#">Size</Button>
                </Control>
                <Control>
                    <Button href="#">Seven</Button>
                </Control>
                <Control>
                    <Button href="#">Eight</Button>
                </Control>
                <Control>
                    <Button href="#">Nine</Button>
                </Control>
                <Control>
                    <Button href="#">Ten</Button>
                </Control>
                <Control>
                    <Button href="#">Eleven</Button>
                </Control>
                <Control>
                    <Button href="#">Twelve</Button>
                </Control>
                <Control>
                    <Button href="#">Thirteen</Button>
                </Control>
            </Field>
        );
    }
}
