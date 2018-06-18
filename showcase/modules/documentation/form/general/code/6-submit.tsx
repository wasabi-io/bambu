import * as React from "react";
import {Control} from "bambu/lib/form";
import Button from "bambu/lib/elements/button/Button";
import {Color} from "bambu";

export default class GeneralSubmit extends React.Component<{}, {}> {
    public render() {
        return (
            <Control>
                <Button color={Color.primary}>Submit</Button>
            </Control>
        );
    }
}
