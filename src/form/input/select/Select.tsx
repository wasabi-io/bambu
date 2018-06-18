import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma, Color, colorValues, Size, sizeValues, State, stateValues} from '../../../index';
import HTMLComponent, {HTMLDivProps} from '../../../base/html/HTML';

export interface SelectProps extends HTMLDivProps {
    color?: string | Color;
    bSize?: string | Size;
    state?: string | State;
    name?: string;
    isFullwidth?: boolean;
    multiple?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    size?: number;
    value?: string | string[] | number;
    onChange?: any;
    elementRef?: (ref: any) => any;
}

const Select: React.SFC<SelectProps> = (props: SelectProps) => {
    const {
        color,
        bSize,
        state,
        className,
        name,
        value,
        size,
        isFullwidth,
        multiple,
        autoFocus,
        disabled,
        form,
        onChange,
        ...inputProps
    } = props;

    const classNames = ClassNames(
        bulma.select,
        {[`${bulma.isFullwidth}`]: isFullwidth},
        {[`${bulma.isMultiple}`]: multiple},
        bulma[color],
        bulma[bSize],
        bulma[state],
        className
    );

    return (
        <div className={classNames} {...inputProps} >
            <select
                name={name}
                multiple={multiple}
                form={form}
                autoFocus={autoFocus}
                disabled={disabled}
                size={size}
                value={value}
                onChange={onChange}
            >
                {props.children}
            </select>
        </div>
    );
};

Select.propTypes = {
    ...HTMLComponent.propTypes,
    color: PropTypes.oneOf(colorValues),
    bSize: PropTypes.oneOf(sizeValues),
    state: PropTypes.oneOf(stateValues),
    name: PropTypes.bool,
    isFullwidth: PropTypes.bool,
    multiple: PropTypes.bool,
    autoFocus: PropTypes.bool,
    disabled: PropTypes.bool,
    form: PropTypes.string,
    value: PropTypes.oneOf([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.number
    ]),
    onChange: PropTypes.func,
    size: PropTypes.number
};

Select.defaultProps = {
    ...HTMLComponent.defaultProps,
    isFullwidth: false,
    multiple: false
};

Select.displayName = 'Select';

export default Select;
