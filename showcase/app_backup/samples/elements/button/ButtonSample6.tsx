import * as React from "react";
import {Color, State} from "rebul/lib/base/css";
import {Button} from "rebul/lib/elements/button";

const ButtonSample1: React.SFC<{}> = (props: {}) => {
    return (
        <div className="example" >
            <Button state={State.focused}>Focused</Button>
            <Button state={State.focused} color={Color.white}>Focused</Button>
            <Button state={State.focused} color={Color.light}>Focused</Button>
            <Button state={State.focused} color={Color.dark}>Focused</Button>
            <Button state={State.focused} color={Color.black}>Focused</Button>
            <Button state={State.focused} color={Color.link}>Focused</Button>
            <Button state={State.focused} color={Color.primary}>Focused</Button>
            <Button state={State.focused} color={Color.info}>Focused</Button>
            <Button state={State.focused} color={Color.success}>Focused</Button>
            <Button state={State.focused} color={Color.warning}>Focused</Button>
            <Button state={State.focused} color={Color.danger}>Focused</Button>
        </div>
    );
};

export default ButtonSample1;
