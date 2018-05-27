import * as React from "react";
import {FaIcon, Icon} from "bambu/lib/elements/icon";
import bulma from "bambu/lib/base/css/bulma";

export default class Index extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <Icon className={bulma.hasTextInfo}><FaIcon name="info-circle"/></Icon>
                <Icon className={bulma.hasTextSuccess}><FaIcon name="check-square"/></Icon>
                <Icon className={bulma.hasTextWarning}><FaIcon name="exclamation-triangle"/></Icon>
                <Icon className={bulma.hasTextDanger}><FaIcon name="ban"/></Icon>
            </div>
        );
    }
}
