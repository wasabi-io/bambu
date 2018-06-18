import * as React from "react";
import {Control, Field, Input} from "bambu/lib/form";
import {Button} from "bambu/lib/elements/button";

export default class GeneralFormAddonsStaticButton extends React.Component<{}, {}> {
    public render() {
        return (
            <Field hasAddons>
                <Control>
                    <Input placeholder="Your email"/>
                </Control>
                <Control>
                    <Button tagName="a" isStatic>
                        @gmail.com
                    </Button>
                </Control>
            </Field>
        );
    }
}
