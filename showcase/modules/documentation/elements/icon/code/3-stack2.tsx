import * as React from "react";
import {Icon} from "bambu/lib/elements/icon";
import {bulma, Size} from "bambu";
import {IconStack} from "bambu/lib/elements/icon/FaIcon";
import IconStacker from "bambu/lib/elements/icon/IconStacker";

export default class Index extends React.Component<{}, {}> {
    public render() {
        return (
           <IconStacker>
               <Icon name="camera" bSize={Size.medium} stack={IconStack.x1} />
               <Icon name="ban" bSize={Size.medium} stack={IconStack.x2} className={bulma.hasTextDanger} />
           </IconStacker>
        );
    }
}
