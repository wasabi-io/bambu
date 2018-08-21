import * as PropTypes from "prop-types";
import * as React from "react";
import {Select, SelectItem, SelectProps} from "bambu/lib/form/input/select";
import * as themes from "./theme.json";
import {IEvent} from "bambu/lib/form";

export interface ThemeSelectorProps extends SelectProps {
    theme: string;
    onChange: (theme: any) => any;
}

const ThemeSelector: React.SFC<ThemeSelectorProps> = (props: ThemeSelectorProps) => {
    const {onChange, theme, ...selectProps} = props;
    return (
        <Select value={theme} {...selectProps} onChange={(e: IEvent) => onChange(e.target.value)}>
            {
                themes.map((item: string, index: number) => (
                        <SelectItem
                            key={index}
                            tabIndex={index}
                            value={item}
                        >
                            {item}
                        </SelectItem>
                    )
                )
            }
        </Select>
    );
};

ThemeSelector.propTypes = {
    ...Select.propTypes,
    theme: PropTypes.string,
    onChange: PropTypes.func
};

ThemeSelector.defaultProps = {
    ...Select.defaultProps
};

ThemeSelector.displayName = "ThemeSelector";

export default ThemeSelector;
