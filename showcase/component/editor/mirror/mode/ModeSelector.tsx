import * as PropTypes from "prop-types";
import * as React from "react";
import {Select, SelectItem, SelectProps} from "bambu/lib/form/input/select";
import * as modes from "./mode.json";
import {IEvent} from "bambu/lib/form";

export interface ModeSelectorProps extends SelectProps {
    mode: string;
    onChange: (e: any) => any;
}

const ModeSelector: React.SFC<ModeSelectorProps> = (props: ModeSelectorProps) => {
    const {onChange, mode, ...selectProps} = props;
    return (
        <Select defaultValue={mode} {...selectProps} onChange={(e: IEvent) => onChange(e.target.value)}>
            {
                modes.map((item: string, index: number) => (
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

ModeSelector.propTypes = {
    ...Select.propTypes,
    mode: PropTypes.string,
    onChange: PropTypes.func
};

ModeSelector.defaultProps = {
    ...Select.defaultProps
};

ModeSelector.displayName = "ModeSelector";

export default ModeSelector;
