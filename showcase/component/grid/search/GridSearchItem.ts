import GridSearchQuery from "./GridSearchQuery";
import GridField from "../GridField";

interface GridSearchItem {
    name: string;
    field?: GridField;
    action?: GridSearchQuery;
}

export default GridSearchItem;
