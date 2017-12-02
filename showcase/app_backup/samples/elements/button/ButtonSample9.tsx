import * as React from "react";
import {Color, State } from "rebul/lib/base/css";
import {Button} from "rebul/lib/elements/button";

const ButtonSample1: React.SFC<{}> = (props: {}) => {
    return (
        <div className="example" >
            <Button state={State.static}>Static</Button>
            <Button state={State.static} color={Color.white}>Static</Button>
            <Button state={State.static} color={Color.light}>Static</Button>
            <Button state={State.static} color={Color.dark}>Static</Button>
            <Button state={State.static} color={Color.black}>Static</Button>
            <Button state={State.static} color={Color.link}>Static</Button>
            <Button state={State.static} color={Color.primary}>Static</Button>
            <Button state={State.static} color={Color.info}>Static</Button>
            <Button state={State.static} color={Color.success}>Static</Button>
            <Button state={State.static} color={Color.warning}>Static</Button>
            <Button state={State.static} color={Color.danger}>Static</Button>
        </div>
    );
};

export default ButtonSample1;
