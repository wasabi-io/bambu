import * as React from 'react';
import {Color, Size, State} from 'bambu/lib/base/css';
import {Input, InputProps} from 'bambu/lib/form';
import BaseInput, {BaseInputProps} from '../BaseInput';
import Stateless from "component/Stateless";
import gridStyle from "../../grid/gridStyle";
import * as ClassNames from "classnames";
import searchStyle from "./searchStyle";
import {action} from "mobx";
import {observer} from "mobx-react";
import {Props} from "wasabi-common";

export interface SearchInputProps extends BaseInputProps {
    name: string;
    items: Props<any>[];
    placeholder?: string;
    color?: string | Color;
    size?: string | Size;
    state?: string | State;
    inputProps?: InputProps;
    onSearch?: (name: string, value: any) => any;
    onSelected?: (value: string) => any;
    value?: any;
    type?: string;
    autoComplete?: "on" | "off";
}

@observer
export default class SearchInput extends Stateless<SearchInputProps> {
    private inputId: string = `search-input-${this.id}`;
    private value: string;

    public constructor(props: SearchInputProps) {
        super(props);
        this.value = props.value;
    }

    public render(): JSX.Element {
        const {type, value, name, placeholder, color, size, state, inputProps, onChange, autoComplete, className, children, ...props} = this.props;
        const classNames = ClassNames(gridStyle.bSearch, className);

        return (
            <BaseInput className={classNames}  {...props}>
                <Input
                    id={this.inputId}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    color={color}
                    bSize={size}
                    state={state}
                    autoComplete={autoComplete}
                    onChange={this.onChange}
                    {...inputProps}
                />
                {children}
                {(this.props.items && this.props.items.length > 0) && (
                    <div className={searchStyle.bSearchAutoComplete}>
                        {
                            this.props.items.map((item: Props<any>) => (
                                <div onClick={this.onSelect.bind(this, item)}>{item[name]}</div>
                            ))
                        }
                    </div>
                )}
            </BaseInput>
        );
    }

    @action
    public onChange = (e?: any) => {
        this.props.onSearch(this.props.name, e.target.value);
    }

    public onSelect = (value: string) => {
        this.onChange({target: {value}});
    }
}
