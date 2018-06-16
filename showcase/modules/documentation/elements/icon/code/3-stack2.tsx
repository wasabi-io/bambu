import * as React from "react";
import {FaIcon, Icon} from "bambu/lib/elements/icon";
import {bulma, Size} from "bambu";
import {FaIconStack} from "bambu/lib/elements/icon/FaIcon";

export default class Index extends React.Component<{}, {}> {
    public render() {
        return (
            <Icon stack bSize={Size.large}>
                <FaIcon name={"camera"} stack={FaIconStack.x1}/>
                <FaIcon name={"ban"} className={bulma.hasTextDanger} stack={FaIconStack.x2}/>
            </Icon>
        );
    }
}
