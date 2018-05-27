import * as React from "react";
import {FaIcon, Icon} from "bambu/lib/elements/icon";
import {Size} from "bambu";
import {FaIconStack} from "bambu/lib/elements/icon/FaIcon";

export default class Index extends React.Component<{}, {}> {
    public render() {
        return (
            <Icon stack bSize={Size.medium}>
                <FaIcon name="circle" stack={FaIconStack.x2}/>
                <FaIcon name="flag" stack={FaIconStack.x1} inverse/>
            </Icon>
        );
    }
}
