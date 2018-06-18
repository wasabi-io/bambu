import * as React from "react";
import CellSettingItem from "../../header/CellSettingItem";
import DefaultInput from "../../../input/DefaultInput";

const TextSearchBox: React.SFC<CellSettingItem> = (props: CellSettingItem) => {
    const {name, field, action, value} = props;
    return (
        <DefaultInput
            key={name}
            value={value}
            onChange={(e?: any) => action.like(name, e.target.value)}
            name="search"
            placeholder="Search..."
            rightIcon={{name: "search"}}
        />
    );
};

export default TextSearchBox;
