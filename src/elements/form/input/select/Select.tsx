import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Color, colorValues, Size, SizeValues } from 'rebul/lib/base/css';
import { State, StateValues } from 'rebul/lib/base/css/state';

import HTMLComponent, { HTMLDivProps } from '../../../../base/html/HTML';
import FormStyle from '../../FormStyle';

export interface SelectProps extends HTMLDivProps {
    color?: string | Color;
    iSize?: string | Size;
    state?: string | State;

    name?: string;
    multiple: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    size?: number;
    value?: string | string[] | number;
    onChange?: any;
}

const Select: React.SFC<SelectProps> = (props: SelectProps) => {
    const {
        color,
        iSize,
        state,
        className,

        name,
        value,
        size,
        multiple,
        autoFocus,
        disabled,
        form,
        onChange,
        ...inputProps
    } = props;

    const classNames = ClassNames(
        {
            [`${FormStyle.isMultiple}`]: multiple
        },
        FormStyle.select,
        FormStyle[color],
        FormStyle[iSize],
        FormStyle[state],
        className
    )

    return (
        <div className={classNames} {...inputProps} >
            <select name={name} multiple={multiple} form={form} autoFocus={autoFocus} disabled={disabled} size={size} value={value} onChange={onChange}>
                {this.props.children}
            </select>
        </div>
    );
};

Select.propTypes = {
    ...HTMLComponent.propTypes,
    color: PropTypes.oneOf(colorValues),
    size: PropTypes.oneOf(SizeValues),
    state: PropTypes.oneOf(StateValues),
};

Select.defaultProps = {
    ...HTMLComponent.defaultProps,
    multiple: false
};

Select.displayName = "Select";

export default Select;
