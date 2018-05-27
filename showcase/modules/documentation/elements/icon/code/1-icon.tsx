import * as React from "react";
import {Icon} from "bambu/lib/elements/icon";
import FaIcon from "bambu/lib/elements/icon/FaIcon";

export default class Index extends React.Component<{}, {}> {
    public render() {
        return (
            <Icon>
                <FaIcon name="home"/>
            </Icon>
        );
    }
}
