import * as React from "react";
import Stateless from "wasabi-ui/lib/Stateless";
import Grid from "component/grid/Grid";
import {Props} from "wasabi-common";
import GridField from "component/grid/GridField";
import {observer} from "mobx-react";
import GridStore from "../../../component/grid/GridStore";
import BambuGridAction from "../../action/BambuGridAction";
import BambuSearchAction from "../../action/BambuSearchAction";

export interface ComponentDoc {
    displayName: string;
    description: string;
    props: PropItem[];
}

export interface PropItem {
    name: string;
    required: boolean;
    type: PropItemType;
    description: string;
    defaultValue: any;
}

export interface Component {
    name: string;
}

export interface PropItemType {
    name: string;
    value?: any;
}

export interface ReactComponentProps {
    value: ComponentDoc;
}

const fields: Props<GridField> = {
    name: {
        type: "text",
        header: "Name",
        settings: {
            search: {
                clickable: true
            }
        },
        sortable: true,
        cell: {
            style: {
                width: "20%"
            }
        }
    },
    required: {
        type: "text",
        header: "Required",
        cell: {
            style: {
                width: "5%"
            }
        }
    },
    type: {
        type: "text",
        header: "Type",
        alias: "type.name",
        cell: {
            style: {
                width: "20%"
            }
        }
    },
    description: {
        type: "text",
        header: "Description",
        cell: {
            style: {
                width: "30%"
            }
        }
    },
    defaultValue: {
        type: "text",
        header: "Default Value",
        renderer: (name: string, item?: PropItem, key?: number, field?: GridField) => {
            const value = item.defaultValue || "";

            if (item.type) {
                switch (item.type.name) {
                    case "boolean":
                        return value.value || value || "false";
                }
            }
            return value.value || value;
        },
        cell: {
            style: {
                width: "10%"
            }
        }
    }
};

@observer
export default class ReactComponent extends Stateless<ReactComponentProps> {
    private store: GridStore<PropItem>;
    private action: BambuGridAction<PropItem>;

    public constructor(props: ReactComponentProps) {
        super(props);
        this.store = new GridStore({
            fields,
            items: props.value.props,
        });
        const search = new BambuSearchAction<PropItem>({
            store: this.store,
            offset: 0,
            limit: 40
        });
        console.log(props.value.props);
        this.action = new BambuGridAction<PropItem>({search});
        search.list();
    }

    public render() {
        return (
            <Grid store={this.store} action={this.action}/>
        );
    }
}
