import * as React from "react";
import {Color, State} from "rebul/lib/base/css";
import {Button} from "rebul/lib/elements/button";

const ButtonSample1: React.SFC<{}> = (props: {}) => {
    return (
        <div className="example" >
            <Button state={State.active}>Active</Button>
            <Button state={State.active} color={Color.white}>Active</Button>
            <Button state={State.active} color={Color.light}>Active</Button>
            <Button state={State.active} color={Color.dark}>Active</Button>
            <Button state={State.active} color={Color.black}>Active</Button>
            <Button state={State.active} color={Color.link}>Active</Button>
            <Button state={State.active} color={Color.primary}>Active</Button>
            <Button state={State.active} color={Color.info}>Active</Button>
            <Button state={State.active} color={Color.success}>Active</Button>
            <Button state={State.active} color={Color.warning}>Active</Button>
            <Button state={State.active} color={Color.danger}>Active</Button>
        </div>
    );
};

export default ButtonSample1;
