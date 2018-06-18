import * as React from "react";
import {BulletTreeItem} from "component/elements/BulletTree";
import Highlight from "component/code/highlight/Highlight";

const packageJson = require("../../../../../package.json");

const bulletItems: BulletTreeItem[] = [{
    header: <span>use <strong>npm</strong> or <strong>yarn</strong> to install dependencies of the <strong>bambu</strong> package.</span>,
    items: [
        {header: <span><strong>bulma :</strong> ( version {packageJson.peerDependencies["bulma"]} )</span>},
        {header: <span><strong>font-awesome :</strong> ( version {packageJson.peerDependencies["font-awesome"]} )</span>},
        {header: <span><strong>react :</strong> ( version {packageJson.peerDependencies["react"]} )</span>},
        {header: <span><strong>prop-types :</strong> ( version {packageJson.peerDependencies["prop-types"]} )</span>},
        {header: <span><strong>classnames :</strong> ( version {packageJson.peerDependencies["classnames"]} )</span>}
    ]
},
    {
        header: <span>use <strong>npm</strong> or <strong>yarn</strong> to install the <strong>bambu</strong> package</span>
    },
    {
        header: (
            <span>
            provide reading <strong>css</strong> files as modules.
                            <div><strong>Note :</strong> <strong>bambu</strong> use <strong>bulma.css</strong> from under of node_modules.
                                <Highlight language="javascript">
                                    import bulma from "bulma/css/bulma.css"
                                </Highlight>
                            </div>
        </span>
        )
    }
];

export default bulletItems;
