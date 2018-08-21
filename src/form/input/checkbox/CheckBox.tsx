import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma} from '../../../index';
import Input, {InputProps} from "../Input";
import {IEvent} from "../InputField";

export interface CheckBoxProps extends InputProps {
    value?: boolean;
}

const CheckBox: React.SFC<CheckBoxProps> = (props: CheckBoxProps) => {
    const {id, value, className, onChange, children, ...inputProps} = props;

    const classNames = ClassNames(bulma.checkbox, className);

    return (
        <label htmlFor={id} className={classNames}>
            <input id={id} type="checkbox" checked={value} {...inputProps} onClick={(e?: IEvent) => {
                e.target.value = !value;
                e.target.checked = !value;
                e.target.parsedValue = !value;
                onChange && onChange(e);
            }}/>
            {children}
        </label>
    );
};

CheckBox.propTypes = {
    ...Input.propTypes,
    value: PropTypes.bool,
} as any;

CheckBox.defaultProps = {
    ...Input.defaultProps,
    value: false
};

CheckBox.displayName = 'CheckBox';

export default CheckBox;
