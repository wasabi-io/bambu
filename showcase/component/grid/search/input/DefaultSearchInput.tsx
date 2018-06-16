import * as ClassNames from "classnames";
import * as React from "react";
import {Stateless} from "wasabi-ui";
import SearchInput from "../../../input/search/SearchInput";
import GridSearchItem from "../GridSearchItem";
import searchStyle from "./searchStyle";
import {Props} from "wasabi-common";

export interface DefaultSearchInputProps extends GridSearchItem {
    className?: string;
    name: string;
    items: Props<any>[];
}

export default class DefaultSearchInput extends Stateless<DefaultSearchInputProps> {
    public render() {
        const {name, field, items, className, ...props} = this.props;

        const classNames = ClassNames(searchStyle.bSearch, className);

        return (
            <SearchInput
                items={items}
                className={classNames}
                autoComplete="off"
                key={`grid-search=${this.props.name}`}
                defaultValue={field.defaultValue}
                name={name}
                placeholder={field.placeholder || field.header}
                rightIcon={{name: "search"}}
                {...props}
            />
        );
    }
}
