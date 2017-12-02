import * as React from "react";
import {Color} from "rebul/lib/base/css";
import {Button} from "rebul/lib/elements/button";

const ButtonSample1: React.SFC<{}> = (props: {}) => {
    return (
        <div className="example">
            <Button>Button</Button>
            <Button color={Color.white}>White</Button>
            <Button color={Color.light}>Light</Button>
            <Button color={Color.dark}>Dark</Button>
            <Button color={Color.black}>Black</Button>
            <Button color={Color.link}>Link</Button>
            <Button color={Color.primary}>Primary</Button>
            <Button color={Color.info}>Info</Button>
            <Button color={Color.success}>Success</Button>
            <Button color={Color.warning}>Warning</Button>
            <Button color={Color.danger}>Danger</Button>
        </div>

    );
};

export default ButtonSample1;
