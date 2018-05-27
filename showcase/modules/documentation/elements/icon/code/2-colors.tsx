import * as React from "react";
import { Icon } from "bambu/lib/elements/icon";
import bulma from "bambu/lib/base/css/bulma";

export default class Index extends React.Component<{}, {}> {
    public render() {
        return (
           <div>
               <Icon name="info-circle" className={bulma.hasTextInfo} />
               <Icon name="check-square" className={bulma.hasTextSuccess} />
               <Icon name="exclamation-triangle" className={bulma.hasTextWarning} />
               <Icon name="ban" className={bulma.hasTextDanger} />
           </div>
        );
    }
}
