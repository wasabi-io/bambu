import * as ClassNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {bulma} from '../../../index';
import Input, {InputProps} from "../Input";
import {IEvent} from "../InputField";

export interface RadioProps extends InputProps {
    value?: boolean;
}

const Radio: React.SFC<RadioProps> = (props: RadioProps) => {
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

Radio.propTypes = {
    ...Input.propTypes,
    value: PropTypes.bool
} as any;

Radio.defaultProps = {
    ...Input.defaultProps,
    value: false
};

Radio.displayName = 'Radio';

export default Radio;
