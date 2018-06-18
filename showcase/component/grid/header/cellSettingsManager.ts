import * as React from "react";
import Map from 'wasabi-common/lib/collection/Map';
import CellSettingItem from "./CellSettingItem";
import GridSearchBox from "../search/GridSearchBox";

export type SearchItemType = React.SFC<CellSettingItem> | React.ComponentClass<CellSettingItem>;

const cellSettingsManager = new Map<string, SearchItemType>();

cellSettingsManager.putAll({
    search: GridSearchBox
});

export default cellSettingsManager;
