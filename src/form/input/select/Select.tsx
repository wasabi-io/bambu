import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma, Color, Size, State} from '../../../index';
import HTMLComponent, {HTMLDivProps} from '../../../base/html/HTML';
import Input from '../Input';
import {InputFieldChange} from "../InputField";

export interface SelectProps extends HTMLDivProps {
    name: string;
    value?: any;
    color?: string | Color;
    bSize?: string | Size;
    onChange?: InputFieldChange;
    state?: string | State;
    elementRef?: (ref: any) => any;
    isFullwidth?: boolean;
    multiple?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    size?: number;
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
        elementRef,
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
                ref={elementRef}
            >
                {props.children}
            </select>
        </div>
    );
};

Select.propTypes = {
    ...Input.propTypes,
    isFullwidth: PropTypes.bool,
    multiple: PropTypes.bool,
    autoFocus: PropTypes.bool,
    disabled: PropTypes.bool,
    form: PropTypes.string,
    size: PropTypes.number
} as any;

Select.defaultProps = {
    ...HTMLComponent.defaultProps,
    isFullwidth: false,
    multiple: false
};

Select.displayName = 'Select';

export default Select;
