import * as React from "react";
import searchManager from "./searchManager";
import CellSettingItem from "../header/CellSettingItem";

const GridSearchBox: React.SFC<CellSettingItem> = (props: CellSettingItem) => {
    const {name, field, action} = props;
    const SearchItem = searchManager.get(field.type) || searchManager.get("default");
    return (
        <SearchItem
            key={`grid-search=${name}`}
            name={name}
            field={field}
            action={action}
        />
    );
};

export default GridSearchBox;
