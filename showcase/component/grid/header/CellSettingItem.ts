import GridSearchQuery from "../search/GridSearchQuery";
import GridField from "../GridField";

interface CellSettingItem {
    name: string;
    field?: GridField;
    action?: GridSearchQuery;
    value?: any;
}

export default CellSettingItem;
